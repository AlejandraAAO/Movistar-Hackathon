import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  closeResult: string;
  data: any;
  fundTime: string;
  nameFund: string;
  profitability: number;
  currency: string;
  codContract: string;
  recommandations: any = [];
  errorMsg:string = "";
  creationDate: string;
  dataTransfer: any = {};
  transferDestination: any = {};

  mesesRoboAdvisor = null;
  showSpinner: boolean = true;
  message: string;
  status:number; 

  @ViewChildren('cardFund') cardFund;

  

  ngAfterViewInit() {
    this.cardFund.changes.subscribe(result => {
      // Scroll
      if(result._results.length > 0) {
        this.moveScroll();
      }
    })
  }

  moveScroll() {
    let SETTINGS = {
      navBarTravelling: false,
      navBarTravelDirection: "",
      navBarTravelDistance: 150
    }

    let pnAdvancerLeft = document.getElementById("js-arrow-left");
    let pnAdvancerRight = document.getElementById("js-arrow-right");

    let pnProductNav = document.getElementById("js-scroll");
    let pnProductNavContents = document.getElementById("js-funds-contents");

    pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));

    let last_known_scroll_position = 0;
    let ticking = false;

    function doSomething(scroll_pos) {
      pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
    }

    pnProductNav.addEventListener("scroll", function () {
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          doSomething(last_known_scroll_position);
          ticking = false;
        });
      }
      ticking = true;
    });


    pnAdvancerLeft.addEventListener("click", function () {
      if (SETTINGS.navBarTravelling === true) {
        return;
      }
      if (determineOverflow(pnProductNavContents, pnProductNav) === "left" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
        let availableScrollLeft = pnProductNav.scrollLeft;
        if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
          pnProductNavContents.style.transform = "translateX(" + availableScrollLeft + "px)";
        } else {
          pnProductNavContents.style.transform = "translateX(" + SETTINGS.navBarTravelDistance + "px)";
        }
        pnProductNavContents.classList.remove("content-no-transition");
        SETTINGS.navBarTravelDirection = "left";
        SETTINGS.navBarTravelling = true;
      }
      pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
    });

    // pnAdvancerRight.addEventListener("click", function () {
    //   if (SETTINGS.navBarTravelling === true) {
    //     return;
    //   }
    //   if (determineOverflow(pnProductNavContents, pnProductNav) === "right" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
    //     let navBarRightEdge = pnProductNavContents.getBoundingClientRect().right;
    //     let navBarScrollerRightEdge = pnProductNav.getBoundingClientRect().right;
    //     let availableScrollRight = Math.floor(navBarRightEdge - navBarScrollerRightEdge);
    //     if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
    //       pnProductNavContents.style.transform = "translateX(-" + availableScrollRight + "px)";
    //     } else {
    //       pnProductNavContents.style.transform = "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
    //     }
    //     pnProductNavContents.classList.remove("content-no-transition");
    //     SETTINGS.navBarTravelDirection = "right";
    //     SETTINGS.navBarTravelling = true;
    //   }
    //   pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
    // });

    // pnProductNavContents.addEventListener(
    //   "transitionend",
    //   function () {
    //     let styleOfTransform = window.getComputedStyle(pnProductNavContents, null);
    //     let tr = styleOfTransform.getPropertyValue("-webkit-transform") || styleOfTransform.getPropertyValue("transform");
    //     let amount = Math.abs(parseInt(tr.split(",")[4]) || 0);
    //     pnProductNavContents.style.transform = "none";
    //     pnProductNavContents.classList.add("content-no-transition");
    //     if (SETTINGS.navBarTravelDirection === "left") {
    //       pnProductNav.scrollLeft = pnProductNav.scrollLeft - amount;
    //     } else {
    //       pnProductNav.scrollLeft = pnProductNav.scrollLeft + amount;
    //     }
    //     SETTINGS.navBarTravelling = false;
    //   },
    //   false
    // );

    function determineOverflow(content, container) {
      let containerMetrics = container.getBoundingClientRect();
      let containerMetricsRight = Math.floor(containerMetrics.right);
      let containerMetricsLeft = Math.floor(containerMetrics.left);
      let contentMetrics = content.getBoundingClientRect();
      let contentMetricsRight = Math.floor(contentMetrics.right);
      let contentMetricsLeft = Math.floor(contentMetrics.left);
      if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
        return "both";
      } else if (contentMetricsLeft < containerMetricsLeft) {
        return "left";
      } else if (contentMetricsRight > containerMetricsRight) {
        return "right";
      } else {
        return "none";
      }
    }
  }

  

  ngOnInit() {
    this.data = [
      {
        nombre: "plan",
        categoria: "linea"
      },
      {
        nombre: "plan",
        categoria: "linea"
      },{
        nombre: "plan",
        categoria: "linea"
      },{
        nombre: "plan",
        categoria: "linea"
      },{
        nombre: "plan",
        categoria: "linea"
      },{
        nombre: "plan",
        categoria: "linea"
      },{
        nombre: "plan",
        categoria: "linea"
      },{
        nombre: "plan",
        categoria: "linea"
      },{
        nombre: "plan",
        categoria: "linea"
      },{
        nombre: "plan",
        categoria: "linea"
      },{
        nombre: "plan",
        categoria: "linea"
      },{
        nombre: "plan",
        categoria: "linea"
      },
      {
        nombre: "movistar",
        categoria: "speedy"
       }
      ]
      console.log(this.data);
  }
}
