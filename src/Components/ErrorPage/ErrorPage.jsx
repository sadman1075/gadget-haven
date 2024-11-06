
import error from "../../../public/assets/error.jpg"
const ErrorPage = () => {
    return (
        <div>
            <div className="mt-40">
                <img className="mx-auto" src={error} alt="" srcset="" />
            </div>
            <h2 className='text-3xl font bold text-center '>Page Not Found</h2>
        </div>
    );
};

export default ErrorPage;