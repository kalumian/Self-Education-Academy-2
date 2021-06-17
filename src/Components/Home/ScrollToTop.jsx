const ScrollToTop = () =>{
    return (
      <a className={ true ? "to-top active" : "to-top"} onClick={() =>  window.scrollTo(0, 0)}>
        <i className="fas fa-chevron-up"></i>
      </a>
    );
}
export default ScrollToTop;

