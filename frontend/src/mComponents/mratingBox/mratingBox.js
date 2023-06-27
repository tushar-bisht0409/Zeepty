import './mratingBox.css';
export default function MRatingBox({stars,star_size}) {
  const ratingStar = Array.from({length: 5}, (elem, index) => {
    let number = index + 0.5;
    return (
      <div key={index}>
        {stars >= index + 1 ? (
            <i style={{alignSelf: 'center', fontSize: star_size === undefined ?'10px' : star_size,marginRight: '2px', color: "#FFB800"}} className="fa-solid fa-star"></i>
        ) : stars >= number ? (
            <i style={{alignSelf: 'center', fontSize: star_size === undefined ?'10px' : star_size,marginRight: '2px', color: "#FFB800"}} className="fa-regular fa-star-half-stroke"></i>
        ) : (
            <i style={{alignSelf: 'center', fontSize: star_size === undefined ?'10px' : star_size,marginRight: '2px', color: "#FFB800"}} className="fa-regular fa-star"></i>
        )}
      </div>
    );
  });
  return (
    <div className='mratingContainer'>
      {ratingStar}
    </div>
  );
}