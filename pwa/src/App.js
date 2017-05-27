import React, { Component } from 'react';
import pwa from './what-is-pwa-img.png';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <span className="rowHeader">
              Hello PWA
            </span>
            <div className="lineTxt">
              <span className="textLight">
                  But I must explain to you how all this mistaken idea of denouncing pleasure and 
                  praising pain was born and I will give you a complete account of the system, 
                  and expound the actual teachings of the great explorer of the truth, 
                  the master-builder of human happiness. No one rejects, dislikes, 
                  or avoids pleasure itself, because it is pleasure, 
                  but because those who do not know how to pursue pleasure rationally encounter 
                  consequences that are extremely painful. Nor again is there anyone who loves 
                  or pursues or desires to obtain pain of itself, because it is pain, 
                  but because occasionally circumstances occur in which toil and pain can procure him 
                  some great pleasure. To take a trivial example, which of us ever undertakes laborious 
                  physical exercise, except to obtain some advantage from it? But who has any right to 
                  find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, 
                  who avoids a pain that produces no resultant pleasure?
              </span>
              
            </div>
            <img src={pwa} className="imgContainer" alt="pwa"/>
        </div>
          <style jsx>
            {`
              .imgContainer {
                    width: 100% !important;
                    position: relative !important;
                    height: 100% !important;
              }
              .textLight {
                    font-weight: 300 !important;
                    color: #484848 !important;
                    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
                    margin: 0px !important;
                    word-wrap: break-word !important;
                    font-size: 15px !important;
                    line-height: 18px !important;
                    letter-spacing: 0.2px !important;
                    padding-top: 0px !important;
                    padding-bottom: 0px !important;
                    display: inline !important;
              }    
              .lineTxt {
                      padding-top: 16px;
                      line-height: 18px !important;
                      max-height: 36px !important;
                      overflow: hidden !important;
                      text-overflow: ellipsis !important;
                      display: -webkit-box !important;
                      -webkit-line-clamp: 2 !important;
                      -webkit-box-orient: vertical !important
                      display: inline !important;
              }
              @media (min-width: 744px) {
                .rowHeader {
                  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
                  font-size: 28px !important;
                  line-height: 36px !important;
                  letter-spacing: -0.6px !important;
                  padding-top: 2px !important;
                  padding-bottom: 2px !important;
                  color: #484848 !important;
                }
              }

              .rowHeader {
                      font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
                      font-size: 22px !important;
                      line-height: 28px !important;
                      letter-spacing: -0.2px !important;
                      padding-top: 0px !important;
                      padding-bottom: 0px !important;
                      color: #484848 !important;
                      font-weight: 700 !important;
                      margin-bottom: 24px !important;
              }

              @media (min-width: 1128px) {
                  .container {
                      margin-top: 50px;
                      position: relative !important;
                      padding-left: 64px !important;
                      padding-right: 64px !important;
                  }
              }
              .container {
                      margin-top: 50px;
                      padding-left: 64px !important;
                      padding-right: 64px !important;
                      max-width: none !important;
              }
            `}
          </style>
      </div>
    );
  }
}

export default App;
