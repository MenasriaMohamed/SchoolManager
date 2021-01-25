import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Routes} from '../../Constantes/Routes'
import { AuthenticationService } from "../../Controllers/AuthController";
export class Sidebar extends Component {
  render = () => {
    return (
      <div className="sidebar">
        <div className="sidebar-background"></div>
        <div className="sidebar-wrapper scrollbar-inner">
          <div className="sidebar-content">
            <div className="user">
              <div className="avatar-sm float-left mr-2">
                <img
                  src={require("../../Resources/img/jm_denis.jpg")}
                  alt="..."
                  className="avatar-img rounded-circle"
                />
              </div>
              <div className="info">
                <a
                  data-toggle="collapse"
                  href="#collapseExample"
                  aria-expanded="true"
                >
                  <span>
                    Hizrian
                    <span className="user-level">Administrator</span>
                    <span className="caret"></span>
                  </span>
                </a>
                <div className="clearfix"></div>

                <div className="collapse in" id="collapseExample">
                  <ul className="nav">
                    <li>
                      <a href="#profile">
                        <span className="link-collapse">My Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="#edit">
                        <span className="link-collapse">Edit Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="#settings">
                        <span className="link-collapse">Settings</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="nav">
              <li className="nav-item active">
                <Link to={Routes.dashboard}>
                  <i className="fas fa-home"></i>
                  <p>لوحة القيادة</p>
                </Link>
              </li>
              <li className="nav-section">
                <span className="sidebar-mini-icon">
                  <i className="fa fa-ellipsis-h"></i>
                </span>
                <h4 className="text-section d-flex justify-content-center">إدارة  و التسيير</h4>
              </li>

              <li className="nav-item">
                <a data-toggle="collapse" href="#trainers">
                  <i className="fas fa-user-tie"></i>
                  <p>Teachers</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="trainers">
                  <ul className="nav nav-collapse">
                    <li>
                      <Link to={""}>
                        <span className="sub-item">List of teachers</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a data-toggle="collapse" href="#students">
                  <i className="fas fa-user-graduate"></i>
                  <p>Students</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="students">
                  <ul className="nav nav-collapse">
                    <li>
                      <Link to={""}>
                        <span className="sub-item">List of students</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <a data-toggle="collapse" href="#groupe">
                  <i className="fas fa-users"></i>
                  <p>Groups</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="groupe">
                  <ul className="nav nav-collapse">
                    <li>
                      <Link to={""}>
                        <span className="sub-item">List of groups</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <Link to={""} data-toggle="collapse" href="#settings">
                  <i className="fas fa-money-bill-wave"></i>
                  <p>Settings</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={""} data-toggle="collapse" href="#settings">
                  <i className="fa fa-cogs"></i>
                  <p>Settings</p>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" data-toggle="collapse" onClick={()=>{AuthenticationService.logout()}}>
                  <i className="fas fa-door-open"></i>
                    <p>Logout</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
}
