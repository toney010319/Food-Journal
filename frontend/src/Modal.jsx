
const Modal = (props) => {
    const { children } = props;
    return (
        <>
            <div className="fixed    inset-0 z-40" />

            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-50 p-12 rounded-3xl">


                {children}
            </div>
        </>
    );
};

export default Modal;
