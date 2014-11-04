<?php

class EmmyJJ {
    private static $request;
    private static $accepted_contact_fields = array(
        'name',
        'email',
        'subject',
        'message'
    );

    public static function setup()
    {
        $url = preg_replace('/' . WWW_ROOT . '/', '', $_SERVER['REQUEST_URI']);

        if (!$url) {
            self::$request = array('home');
        } else {
            self::$request = explode('/', $url);
        }

        ob_start();
    }

    public static function getTemplate($path)
    {
        $file = ROOT . '/lib/templates/'. $path .'.php';

        if (file_exists($file)) {
            require $file;
        } else {
            http_response_code(404);
            require ROOT . '/lib/templates/404.php';
        }
    }

    public static function getTree()
    {
        return self::$request;
    }

    public static function flush()
    {
        ob_end_flush();
    }

    public static function handleContactRequest()
    {
        $params = array();
        $response = array(
            'status' => '200 OK',
            'message' => 'Contact request submitted successfully.'
        );

        foreach(self::$accepted_contact_fields as $field) {
            $params[$field] = htmlspecialchars ($_POST[$field]);
        }

        /**
         * Timeout a contact request if the form is more than FORM_FRESHNESS old.
         */
        if (!isset($_POST['request-id']) || !self::validateRequestToken($_POST['request-id'])) {
            $response['status'] = '400 Bad Request';
            $response['message'] = 'Your contact request has timed out. Please reload the page and try again.';
            return $response;
        }

        /**
         * Catch any bot with a honeypot attempting to spam the form
         */
        if (isset($_POST['honey']) && !empty($_POST['honey'])) {
            $response['status'] = '400 Bad Request';
            $response['message'] = 'There was a problem submitting your form.';
            return $response;
        }

        /**
         * Validate the email so the CONTACT_EMAIL can respond
         */
        if (!isset($params['email']) && empty($params['email']) || !filter_var($params['email'], FILTER_VALIDATE_EMAIL)) {
            $response['status'] = '400 Bad Request';
            $response['message'] = 'Please enter a valid email to allow me to reply.';
        }

        try {
            self::sendMail($params);
            return $response;
        } catch(\Exception $e) {
            $response['status'] = '500 Internal Server Error';
            $response['message'] = $e->getMessage();
        }

    }

    public static function getRequestToken()
    {
        return (string) time();
    }

    public static function validateRequestToken($token)
    {
        $earliestPossibleTime = time() - FORM_FRESHNESS;

        return $token > $earliestPossibleTime;
    }

    public static function sendMail($params)
    {
        $template = ""
            . "Name: {{name}}\r\n"
            . "Email {{email}}\r\n"
            . "Message: \r\n"
            . "{{message}}\r\n\r\n\r\n"
            . "Delivered by website mail service.\r\nSpeak to " . WEB_ADMIN_CONTACT . " if you have any queries" ;

        $template = str_replace('{{name}}', $params['name'], $template);
        $template = str_replace('{{email}}', $params['email'], $template);
        $template = str_replace('{{message}}', $params['message'], $template);

        $headers = "From: " . WEB_ADMIN_CONTACT;
        $headers .= "\r\nReply-To: " . $params['email'];
        $headers .= "\r\nX-Mailer: PHP/".phpversion();

        if (mail(CONTACT_EMAIL, $params['subject'], $template, $headers, '-f ' . $params['email'])) {
            return true;
        } else {
            throw new \Exception('A technical error occurred. Unable to send mail.');
        }
    }
}
