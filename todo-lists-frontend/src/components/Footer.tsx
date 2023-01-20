import React, { Component } from "react";
import "@/styles/footer.less";
class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer">
          <div className="copyright">
            Copyright@2020-2025 微信公众号{"<懒人码农>"} 湘ICP备19016532号-1
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
