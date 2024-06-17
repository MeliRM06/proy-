import React from 'react';

const Acor = (props) => {
    return (
        <div className="accordion" id={"accordion-" + props.id}>
            <div className="accordion-item">
                <h2 className="accordion-header" id={"heading-" + props.id + "-1"}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse-" + props.id + "-1"} aria-expanded="true" aria-controls={"collapse-" + props.id + "-1"}>
                        {props.t1}
                    </button>
                </h2>
                <div id={"collapse-" + props.id + "-1"} className="accordion-collapse collapse show" aria-labelledby={"heading-" + props.id + "-1"} data-bs-parent={"#accordion-" + props.id}>
                    <div className="accordion-body">
                        {props.cont1}
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id={"heading-" + props.id + "-2"}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse-" + props.id + "-2"} aria-expanded="false" aria-controls={"collapse-" + props.id + "-2"}>
                        {props.t2}
                    </button>
                </h2>
                <div id={"collapse-" + props.id + "-2"} className="accordion-collapse collapse" aria-labelledby={"heading-" + props.id + "-2"} data-bs-parent={"#accordion-" + props.id}>
                    <div className="accordion-body">
                        {props.cont2}
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id={"heading-" + props.id + "-3"}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse-" + props.id + "-3"} aria-expanded="false" aria-controls={"collapse-" + props.id + "-3"}>
                        {props.t3}
                    </button>
                </h2>
                <div id={"collapse-" + props.id + "-3"} className="accordion-collapse collapse" aria-labelledby={"heading-" + props.id + "-3"} data-bs-parent={"#accordion-" + props.id}>
                    <div className="accordion-body">
                        {props.cont3}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Acor;
