import '../styles/loading.css'

function Loading() {
  return (
    <div className="loading">
     <section className="loading_Text">
      <h1 className="loading_text_title">Julie AT</h1>
      <div className="loading_dots">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
          <span className="dot dot5"></span>
      </div>
      <p className="loading_text_catchphrase">Transformer les idées en réalité numérique...</p>
     </section>
    </div>
  );
}

export default Loading;