import "bulma/css/bulma.min.css";

export const id = "faq";

const FAQ = () => {
  return (

      <div className="footer" id={id}>
        <h1 className="title">FAQ</h1>
        <div className="content">
          <ul>
            <li>What does this app do?</li>
          </ul>
        </div>
      </div>

  );
};

export default FAQ;