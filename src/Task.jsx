import "./task.css";
import loanProducts from "./loanProducts.json";

export const Task = () => {
  console.log(loanProducts);
  return (
    <>
      <div className="header">
        Super<b>Bank</b>
      </div>
      <div className="main">
        <div className="menu-list">
          <div className="create-product-button">Создать продукт</div>
          <div className="product-list">
            <div className="product-item active">
              <div className="product-name">Loan Product General</div>
              <div className="product-date">12.12.2021</div>
            </div>
            <div className="product-item">
              <div className="product-name">Loan Product 3000</div>
              <div className="product-date">12.12.2021</div>
            </div>
            <div className="product-item">
              <div className="product-name">Loan Product 1000</div>
              <div className="product-date">12.12.2021</div>
            </div>
            <div className="product-item">
              <div className="product-name">Loan Product для своих</div>
              <div className="product-date">12.12.2021</div>
            </div>
          </div>
        </div>
        <div className="edit-block">
          <div className="edit-title">Редактирование: Loan Product General</div>
          <div>
            <div className="product-name-text">
              <label htmlFor="input-product-name">Product Name</label>
            </div>
            <input
              id="input-product-name"
              type="text"
              placeholder="Placeholder"
              className="edit-product-name-input"
            />
          </div>
          <div className="edit-block-inputs">
            <div className="amount-input-wrapper">
              <div className="input-form first-list-input">
                <div>
                  <label htmlFor="input-min-amount">Min Amount</label>
                </div>
                <input
                  id="input-min-amount"
                  type="text"
                  placeholder="Placeholder"
                  className="min-amount input first-list-input"
                />
              </div>
              <div className="input-form">
                <div>
                  <label htmlFor="input-max-amount">Max Amount</label>
                </div>
                <input
                  id="input-max-amount"
                  type="text"
                  placeholder="Placeholder"
                  className="max-amount input"
                ></input>
              </div>
            </div>
            <div className="term-input-wrapper">
              <div className="input-form first-list-input">
                <div>
                  <label htmlFor="input-min-term">Min Term</label>
                </div>
                <input
                  id="input-min-term"
                  type="text"
                  placeholder="Placeholder"
                  className="min-term input first-list-input"
                />
              </div>
              <div className="input-form">
                <div>
                  <label htmlFor="input-max-term">Max Term</label>
                </div>
                <input
                  id="input-max-term"
                  type="text"
                  placeholder="Placeholder"
                  className="max-term input"
                />
              </div>
            </div>
            <div>
              <div className="input-form first-list-input">
                <div>
                  <label htmlFor="input-annual-rate">Annual Interest Rate</label>
                </div>
                <input
                  id="input-annual-rate"
                  type="text"
                  placeholder="Placeholder"
                  className="annual-rate input"
                />
              </div>
            </div>
            <div className="save-button">Сохранить</div>
          </div>
        </div>
      </div>
    </>
  );
};
