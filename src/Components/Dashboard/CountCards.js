import React, { Component } from "react";
import { toast } from "react-toastify";
import sendAsync from "../../Server/Renderer";
export class CountCards extends Component {
    constructor(props) {
		super(props)
		this.state = { countCases: 0, countTrainers :0,countStudents :0,countGroups :0}
	}
	/**
     * load CountCases from API to state
     */
    loadCountCases = ()=>{
		sendAsync({
            ControllerName: "DashboardController",
            FunctionName: "CountCases",
            data: { },
          })
            .then((result) => {
                if(result){   
					this.setState({countCases : result})
                }
          })
          .catch((err) => console.log(err));
	}
	/**
     * load CountTrainers from API to state
     */
	loadCountTrainers = ()=>{
	}

	/**
     * load CountStudents from API to state
     */
	loadCountStudents = ()=>{
	}

	/**
     * load CountGroups from API to state
     */
	loadCountGroups = ()=>{
	}
	componentDidMount = () => {
		this.loadCountCases()
		this.loadCountTrainers() 
		this.loadCountStudents()
		this.loadCountGroups()
    }
    render = () => {  
        return (
            <>
                   <div className="row">
						<div className="col-sm-6 col-md-3">
							<div className="card card-stats card-round">
								<div className="card-body ">
									<div className="row align-items-center">
										<div className="col-icon">
											<div className="icon-big text-center icon-primary bubble-shadow-small">
												<i className="fas fa-book-reader"></i>
											</div>
										</div>
										<div className="col col-stats ml-3 ml-sm-0">
											<div className="numbers">
												<p className="card-category text-dark">اجمالي القضايا</p>
												<h4 className="card-title">{this.state.countCases}</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-3">
							<div className="card card-stats card-round">
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col-icon">
											<div className="icon-big text-center icon-info bubble-shadow-small">
												<i className="fas fa-user-tie"></i>
											</div>
										</div>
										<div className="col col-stats ml-3 ml-sm-0">
											<div className="numbers">
												<p className="card-category text-dark">Teachers</p>
												<h4 className="card-title">{this.state.countTrainers}</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-3">
							<div className="card card-stats card-round">
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col-icon">
											<div className="icon-big text-center icon-success bubble-shadow-small">
												<i className="fas fa-user-graduate"></i>
											</div>
										</div>
										<div className="col col-stats ml-3 ml-sm-0">
											<div className="numbers">
												<p className="card-category text-dark">Students</p>
												<h4 className="card-title">{this.state.countStudents}</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-3">
							<div className="card card-stats card-round">
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col-icon">
											<div className="icon-big text-center icon-secondary bubble-shadow-small">
												<i className="fas fa-users"></i>
											</div>
										</div>
										<div className="col col-stats ml-3 ml-sm-0">
											<div className="numbers">
												<p className="card-category text-dark">Groups</p>
												<h4 className="card-title">{this.state.countGroups}</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
            </>
        )
    }
}