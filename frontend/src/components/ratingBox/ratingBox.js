import './ratingBox.css';
export default function RatingBox({stars}) {
  const ratingStar = Array.from({length: 5}, (elem, index) => {
    let number = index + 0.5;
    return (
      <div key={index}>
        {stars >= index + 1 ? (
            <i style={{alignSelf: 'center', fontSize: '15px', color: "#FFB800"}} className="fa-solid fa-star"></i>
        ) : stars >= number ? (
            <i style={{alignSelf: 'center', fontSize: '15px', color: "#FFB800"}} className="fa-regular fa-star-half-stroke"></i>
        ) : (
            <i style={{alignSelf: 'center', fontSize: '15px', color: "#FFB800"}} className="fa-regular fa-star"></i>
        )}
      </div>
    );
  });
  return (
    <div className='ratingContainer'>
      {ratingStar}
    </div>
  );
}