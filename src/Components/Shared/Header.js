import React, { Component } from "react";
// import { strings, Localization } from "../../Services/Localization";
import { appTitle } from "../../../package.json";
import { AuthenticationService } from "../../Controllers/AuthController";
export class Header extends Component {
  toggleFullscreen = () => {
    var isFullscreen =
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement &&
        document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement &&
        document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null);
    var doc = document.documentElement;
    if (!isFullscreen) {
      if (doc.requestFullscreen) {
        doc.requestFullscreen();
      } else if (doc.mozRequestFullScreen) {
        doc.mozRequestFullScreen();
      } else if (doc.webkitRequestFullScreen) {
        doc.webkitRequestFullScreen();
      } else if (doc.msRequestFullscreen) {
        doc.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  render = () => {
    return (
      <div className="main-header" data-background-color="purple">
        <div className="logo-header">
          <a href="index.html" className="logo">
            <h2 className="navbar-brand text-light">{appTitle}</h2>
          </a>
          <button
            className="navbar-toggler sidenav-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fa fa-bars"></i>
            </span>
          </button>
          <button className="topbar-toggler more">
            <i className="fa fa-ellipsis-v"></i>
          </button>
          <div className="navbar-minimize">
            <button className="btn btn-minimize btn-rounded">
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
        <nav className="navbar navbar-header navbar-expand-lg">
          <div className="container-fluid">
            {/* <div className="collapse" id="search-nav">
                            <form className="navbar-left navbar-form nav-search mr-md-3">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <button type="submit" className="btn btn-search pr-1">
                                            <i className="fa fa-search search-icon"></i>
                                        </button>
                                    </div>
                                    <input type="text" placeholder="Search ..." className="form-control" />
                                </div>
                            </form>
                        </div> */}
            <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
              {/* <li className="nav-item toggle-nav-search hidden-caret">
                                <a className="nav-link" data-toggle="collapse" href="#search-nav" role="button" aria-expanded="false" aria-controls="search-nav">
                                    <i className="fa fa-search"></i>
                                </a>
                            </li> */}
              <li className="nav-item dropdown hidden-caret">
                <button
                  onClick={this.toggleFullscreen}
                  className="btn btn-link nav-link dropdown-toggle"
                  role="button"
                >
                  <i className="fa fa-expand"></i>
                </button>
              </li>
              <li className="nav-item dropdown hidden-caret">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="messageDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-envelope"></i>
                </a>
                <ul
                  className="dropdown-menu messages-notif-box animated fadeIn"
                  aria-labelledby="messageDropdown"
                >
                  <li>
                    <div className="dropdown-title d-flex justify-content-between align-items-center">
                      Messages
                      <a href="/" className="small">
                        Mark all as read
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="message-notif-scroll scrollbar-outer">
                      <div className="notif-center">
                        <a href="/">
                          <div className="notif-img">
                            <img
                              src={require("../../Resources/img/jm_denis.jpg")}
                              alt="Img Profile"
                            />
                          </div>
                          <div className="notif-content">
                            <span className="subject">Jimmy Denis</span>
                            <span className="block">How are you ?</span>
                            <span className="time">5 minutes ago</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className="notif-img">
                            <img
                              src="../assets/img/chadengle.jpg"
                              alt="Img Profile"
                            />
                          </div>
                          <div className="notif-content">
                            <span className="subject">Chad</span>
                            <span className="block">Ok, Thanks !</span>
                            <span className="time">12 minutes ago</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className="notif-img">
                            <img
                              src="../assets/img/mlane.jpg"
                              alt="Img Profile"
                            />
                          </div>
                          <div className="notif-content">
                            <span className="subject">Jhon Doe</span>
                            <span className="block">
                              Ready for the meeting today...
                            </span>
                            <span className="time">12 minutes ago</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className="notif-img">
                            <img
                              src="../assets/img/talha.jpg"
                              alt="Img Profile"
                            />
                          </div>
                          <div className="notif-content">
                            <span className="subject">Talha</span>
                            <span className="block">Hi, Apa Kabar ?</span>
                            <span className="time">17 minutes ago</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="see-all" href="/">
                      See all messages<i className="fa fa-angle-right"></i>{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown hidden-caret">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="notifDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-bell"></i>
                  <span className="notification">4</span>
                </a>
                <ul
                  className="dropdown-menu notif-box animated fadeIn"
                  aria-labelledby="notifDropdown"
                >
                  <li>
                    <div className="dropdown-title">
                      You have 4 new notification
                    </div>
                  </li>
                  <li>
                    <div className="notif-scroll scrollbar-outer">
                      <div className="notif-center">
                        <a href="/">
                          <div className="notif-icon notif-primary">
                            {" "}
                            <i className="fa fa-user-plus"></i>{" "}
                          </div>
                          <div className="notif-content">
                            <span className="block">New user registered</span>
                            <span className="time">5 minutes ago</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className="notif-icon notif-success">
                            {" "}
                            <i className="fa fa-comment"></i>{" "}
                          </div>
                          <div className="notif-content">
                            <span className="block">
                              Rahmad commented on Admin
                            </span>
                            <span className="time">12 minutes ago</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className="notif-img">
                            <img
                              src="../assets/img/profile2.jpg"
                              alt="Img Profile"
                            />
                          </div>
                          <div className="notif-content">
                            <span className="block">
                              Reza send messages to you
                            </span>
                            <span className="time">12 minutes ago</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className="notif-icon notif-danger">
                            {" "}
                            <i className="fa fa-heart"></i>{" "}
                          </div>
                          <div className="notif-content">
                            <span className="block">Farrah liked Admin</span>
                            <span className="time">17 minutes ago</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="see-all" href="/">
                      See all notifications<i className="fa fa-angle-right"></i>{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown hidden-caret">
                <a
                  className="dropdown-toggle profile-pic"
                  data-toggle="dropdown"
                  href="/"
                  aria-expanded="false"
                >
                  <div className="avatar-sm">
                    <img
                      src={require("../../Resources/img/jm_denis.jpg")}
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-user animated fadeIn">
                  <li>
                    <div className="user-box">
                      <div className="avatar-lg">
                        <img
                          src="../assets/img/profile.jpg"
                          alt="profile"
                          className="avatar-img rounded"
                        />
                      </div>
                      <div className="u-text">
                        <h4>Hizrian</h4>
                        <p className="text-muted">hello@example.com</p>
                        <a
                          href="profile.html"
                          className="btn btn-rounded btn-danger btn-sm"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      My Profile
                    </a>
                    <a className="dropdown-item" href="/">
                      My Balance
                    </a>
                    <a className="dropdown-item" href="/">
                      Inbox
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      Account Setting
                    </a>
                    <div className="dropdown-divider"></div>
                    <button className="btn btn-link dropdown-item" onClick={()=>{AuthenticationService.logout()}}>Logout</button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  };
}
