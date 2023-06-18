import React from 'react';
import '../styles/share.css';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";

  import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
  } from "react-share";

const ShareMenu: React.FC<{ base64image: string }> = ({ base64image }) => {
    const shareUrl = "http://ai-impressionism.onrender.com";
    const shareTitle = "Check this out! Create your own AI-generated impressionist art in seconds! 🧑‍🎨";
    const shareImage = `data:image/png;base64,${base64image}`;

    return (<div id="shareContainer">
        <FacebookShareButton
          url={shareUrl}
          quote={shareTitle}
          title={shareTitle}
          hashtag={'#generativeAI'}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
            url={shareUrl}
            title={shareTitle}
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>
        <PinterestShareButton
            url={shareUrl}
            media={shareImage}
          >
            <PinterestIcon size={40} round />
          </PinterestShareButton>

          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
        
          <EmailShareButton
            url={shareUrl}
            subject={shareTitle}
            body={shareTitle}
          >
            <EmailIcon size={40} round />
          </EmailShareButton>


        <WhatsappShareButton
          url={shareUrl}
          quote={shareTitle}
          title={shareTitle}
          hashtag={'#generativeAI'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
    </div>)
    };
  
export default ShareMenu;