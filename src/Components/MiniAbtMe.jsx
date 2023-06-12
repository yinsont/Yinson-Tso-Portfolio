import * as SiIcons from "react-icons/si";

function MiniAbtMe(){
    return(
        <div className="MiniAbtMe">
            <p>{"<p>Hello, my name is Yinson, a Fullstack Software Engineer</p>"}</p>
            <div className = "Icons">
                {/* <SiIcons.SiNodedotjs/> */}
                <img src = 'https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png' width={100} height={100}/>
                <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png' width={120} height={100}/>
                {/* <SiIcons.SiReact/>
                <SiIcons.SiPython/> */}
                <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' width={100} height={100}/>
                <img src = 'https://flask.palletsprojects.com/en/1.1.x/_static/flask-icon.png' width={100} height={100}/>
            </div>
        </div>
    )
}

export default MiniAbtMe