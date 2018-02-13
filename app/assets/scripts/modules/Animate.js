import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class Animate{
  constructor(){
    this.aboutText = $(".about-text");
    this.aboutProfile = $(".about-profile");
    this.aboutMessage = $(".about-message");
    this.featuresType = $(".features__type");
    this.featuresImg = $(".features__img");
    this.pricePlan = $(".price-plan");
    this.hideContent();
    this.fadeInUp();
    this.fadeInRight();
    this.fadeInLeft();
    this.slideInDown();
    this.fadeIn();
    this.PricePlaceFadeIn();
  }

  hideContent(){
    this.aboutText.addClass("reveal-item");
    this.aboutProfile.addClass("reveal-item");
    this.aboutMessage.addClass("reveal-item");
    this.featuresType.addClass("reveal-item");
    this.featuresImg.addClass("reveal-item");
    this.pricePlan.addClass("reveal-item");
  }

  fadeInUp(){
    this.aboutText.each(function(){
      var currentItem = this
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("fadeInUp reveal-item--is-visible");
        },
        offset: "50%"
      });
    });
  }

  fadeInRight(){
    this.aboutProfile.each(function(){
      var currentItem = this
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("fadeInRight reveal-item--is-visible");
        },
        offset: "20%"
      });
    });
  }

  fadeInLeft(){
    this.aboutMessage.each(function(){
      var currentItem = this
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("fadeInLeft reveal-item--is-visible");
        },
        offset: "20%"
      });
    });
  }

  slideInDown(){
    this.featuresType.each(function(){
      var currentItem = this
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("slideInDown reveal-item--is-visible");
        },
        offset: "85%"
      });
    });
  }

  fadeIn(){
    this.featuresImg.each(function(){
      var currentItem = this
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("fadeIn reveal-item--is-visible");
        },
        offset: "45%"
      });
    });
  }

  PricePlaceFadeIn(){
    this.pricePlan.each(function(){
      var currentItem = this
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("fadeIn reveal-item--is-visible");
        },
        offset: "45%"
      });
    });
  }



}




export default Animate;
