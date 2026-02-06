
const Modal = (props) => {
  const { children, isOpenTopupModal, setIsOpenTopupModal } = props;
  return (
   <div
      className={`fixed inset-0 z-10 transition-transform duration-300 ease-in-out
      ${isOpenTopupModal ? 'translate-y-0' : 'translate-y-full'}`}
    >
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/60 z-20"
        onClick={() => setIsOpenTopupModal(false)}
      />

      {/* bottom sheet */}
      <div className="fixed bottom-0 left-0 w-full z-30 bg-white px-4 py-6 rounded-t-3xl">
        {children}
      </div>
    </div>
  )
}

export default Modal