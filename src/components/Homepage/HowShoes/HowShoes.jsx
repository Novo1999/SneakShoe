import "./HowShoes.scss";
function HowShoes() {
  return (
    <section className="howshoes">
      <div className="howshoes__upper-text">
        <h2>See how your shoes are made</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quis similique minima optio, vel nam, quibusdam dolore, quas ipsum
          deleniti <br /> laudantium asperiores labore quo architecto. Quaerat
          aliquam omnis minus expedita.
        </p>
      </div>
      <div className="howshoes__shoe">
        <div>
          <div>
            <p>01.</p>
            <h4>Pet canvas</h4>
            <p>
              Morbi eget bibendum sit <br /> adipiscing morbi ac nisl vitae
              <br /> maecenas nulla cursus
            </p>
          </div>
          <hr />
          <div>
            <p>02.</p>
            <h4>
              Algae foam + <br /> vegan glue
            </h4>
            <p>
              Enim tincidunt donec vulputate <br /> magna pharetra mattis in
            </p>
          </div>
        </div>

        <img src="/images/sneaker/sneaker-3.png" alt="sneaker details" />
        <div className="howshoes__shoe-right">
          <div>
            <p>03.</p>
            <h4>Organic cotton</h4>
            <p>
              A vel ipsum, sed dignissim <br /> elementum ultrices amet
            </p>
          </div>
          <hr />
          <div>
            <p>04.</p>
            <h4>Upcycled plastic bottles</h4>
            <p>
              Pellentesque viverra amet netus <br /> facilisis amet felis odio
              tortor <br /> orci cursus est
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowShoes;
