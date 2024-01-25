import 'bootstrap/dist/css/bootstrap.css';
import programer from "../assets/programer.png"

function Hello() {
    return (
        <div className="d-flex align-items-center justify-content-center text-center font-monospace flex-column" style={{ height: '80vh' }}>
            <div style={{ width: '8vh' }}><img src={programer} className='img-fluid'></img></div>
            <p className="fw-bold fs-1">Hello. I'm Tomek.</p>
            <div className='fw-italic fs-3'>
                <p className="text-capitalize">full stack web developer</p>
                <p className="text-capitalize">c# .net senior developer</p>
                <p className="text-capitalize">asembly developer</p>
            </div>
        </div>
    );
}

export default Hello;
