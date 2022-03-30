import React from 'react'

function Card_dashboard(props) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
          <div className={`card border-left-${props.data.borderLeft} shadow h-100 py-2`}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              {props.data.contentHead}</div>
                        {
                            typeof (props.data.content) == "string" ?
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.content}</div> : ""
                        }
                        {
                            props.data.content.progressBar ?
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{props.data.content.width}</div>
                                    </div>
                                    <div className="col">
                                        <div className="progress progress-sm mr-2">
                                            <div className="progress-bar bg-info" role="progressbar"
                                                  style={{ width: props.data.content.width}} aria-valuenow="50" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div> : ""
                        }  
                       
                    </div>
                    <div className="col-auto">
                          <i className={`fas ${props.data.icon} fa-2x text-gray-300`}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Card_dashboard