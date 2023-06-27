import "./categoryBar.css";
import React from "react";

const CategoryBar = () => {
  return (
    <div className="category-bar">
      <div className="category Men dropdown">
        Men
        <div class="dropdown-content">
          <table>
            <tr>
              <th>
                <a href="#">Shoes</a>
              </th>
              <th>
                <a href="#">Clothes</a>
              </th>
              <th>
                <a href="#">Sports</a>
              </th>
            </tr>
            <tr>
              <td>
                <a href="#">Nike</a>
              </td>
              <td>
                <a href="#">Levi</a>
              </td>
              <td>
                <a href="#">Adidas</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Puma</a>
              </td>
              <td>
                <a href="#">H&M</a>
              </td>
              <td>
                <a href="#">Yonex</a>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="category Women">Women</div>
      <div className="category Baby&Kids">Baby&Kids</div>
      <div className="category Electronics">Electronics</div>
      <div className="category Home&Living">Home&Living</div>
      <div className="category Sports">Sports</div>
      <div className="category Books">Books</div>
      <div className="category More">More</div>
    </div>
  );
};

export default CategoryBar;
