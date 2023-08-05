import "./Recycle.scss";
function Recycle() {
  return (
    <section className="recycle">
      <div className="recycle__container">
        <div className="recycle__container-left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            repellat ad amet, cupiditate aperiam ducimus voluptate voluptas
            asperiores repellendus autem!
          </p>
          <div className="recycle__badges">
            <img
              src="/images/recycle/recycled-shoe-badge-1.svg"
              alt="recycle"
            />
            <img
              src="/images/recycle/recycled-shoe-badge-2.svg"
              alt="recycle"
            />
            <img
              src="/images/recycle/recycled-shoe-badge-3.svg"
              alt="recycle"
            />
          </div>
        </div>
        <div className="recycle__container-right">
          <img src="/images/recycle/recycled-circle-image.jpg" alt="recycle" />
        </div>
      </div>
    </section>
  );
}

export default Recycle;
