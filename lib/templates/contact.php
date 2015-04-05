<div class="container">
    <div class="row">
        <div class="col-md-offset-2 col-md-6">
            <h3 class="title-blue">Contact</h3>

            <form role="form">
                <input type="hidden" class="form-control" name="request-id" id="request-id" value="<?php echo \EmmyJJ::getRequestToken() ?>">

                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Enter name">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" name="email" id="email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Enter subject">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" class="form-control" name="message" placeholder="Enter a message"></textarea>
                </div>
                <div class="form-group hide">
                    <label for="honey">Honey</label>
                    <input type="text" name="honey" id="honey" class="form-control" ></input>
                </div>
                <div class="form-group clearfix">
                    <button class="btn btn-primary pull-right">Send</button>
                </div>
                <div class="alert alert-info hide"></div>
            </form>
        </div>
        <div class="col-md-4 hidden-xs hidden-sm">
            <img src="public/image/contact.jpg" />
        </div>
        <div class="col-md-offset-2 col-md-10 social">
            <a target="_blank" href="https://www.facebook.com/emmyjjmusic/timeline">
                <img src="public/image/social/facebook.png" />
            </a>
            <a target="_blank" href="http://uk.linkedin.com/pub/emmy-jj/92/74b/533">
                <img src="public/image/social/linkedin.png" />
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UC4ol2znK_3b_SQ5BZEq7P2A">
                <img src="public/image/social/youtube.png" />
            </a>
            <a target="_blank" href="https://myspace.com/emmyjjmusic">
                <img src="public/image/social/myspace.png" />
            </a>
            <a target="_blank" href="https://soundcloud.com/emmyjjmusic">
                <img src="public/image/social/soundcloud.png" />
            </a>
            <a target="_blank" href="http://vimeo.com/user32427455">
                <img src="public/image/social/vimeo.png" />
            </a>
            <a class="social-text-link" target="_blank" href="https://www.facebook.com/katiemariephotographyuk/info">Katie Marie Photography</a>
        </div>
    </div>
</div>
