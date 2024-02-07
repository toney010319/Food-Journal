
const Modal = (props) => {
    const { children } = props;
    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 z-50" />

            <div className="  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 z-50 p-5 rounded-xl">


                {children}
            </div>
        </>
    );
};

export default Modal;
