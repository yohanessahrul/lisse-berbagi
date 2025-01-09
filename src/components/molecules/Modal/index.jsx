
const Modal = (props) => {
  const { children, isOpenTopupModal, setIsOpenTopupModal } = props;
  return (
    <div className={`absolute inset-0 w-full h-[80%] top-0 z-10 transition-transform duration-300 ease-in-out ${isOpenTopupModal ? 'block' : 'hidden'} ${isOpenTopupModal ? 'translate-y-0' : 'translate-y-full'}`}>{/*  modal block */}
      <div className="relative w-full h-full z-10">
        <div className="absolute w-full h-full top-0 left-0 z-20 bg-black opacity-60" onClick={() => setIsOpenTopupModal(!isOpenTopupModal)}></div>
        <div className="absolute w-full bottom-0 left-0 z-30 bg-white px-4 py-6 rounded-t-3xl">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal