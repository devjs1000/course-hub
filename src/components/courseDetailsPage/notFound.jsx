
function NotFound({id}) {
    return (
        <>
        <div className="model bg-white w-4/5 max-w-sm p-8 py-4 mx-auto my-8 rounded-lg shadow-black">
            <div className="model-title py-3 text-lg text-center">
                <h1>Course Not Found</h1>
            </div>
            <hr />
            <div className="model content py-2">
                <p> The course {id}, which you were lokking for was not found!</p>
            </div>
        </div>
        </>
    );
}
export default NotFound;