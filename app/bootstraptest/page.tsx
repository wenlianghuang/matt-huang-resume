import "bootstrap/dist/css/bootstrap.min.css";

export default function Bootstraptest(){
    return (
        <div className="container mt-5">
      <header className="jumbotron my-4 text-center">
        <h1 className="display-4">Welcome to My Next.js Site</h1>
        <p className="lead">This is a simple Bootstrap example in Next.js.</p>
        <a href="#" className="btn btn-primary btn-lg">
          Get Started
        </a>
      </header>

      <div className="row">
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Feature 1</h4>
              <p className="card-text">
                This is a sample feature description using Bootstrap.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Feature 2</h4>
              <p className="card-text">
                Bootstrap allows you to create clean and responsive designs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Feature 3</h4>
              <p className="card-text">
                With Bootstrap, building UI components is faster and easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}