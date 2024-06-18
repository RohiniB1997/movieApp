
const generateStars = (rating) => {
    let stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
  
    for (let i = 1; i <= fullStars; i++) {
      stars.push("★");
    }
  
    if (hasHalfStar) {
      stars.push("☆½");
    }
  
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 10; i++) {
      stars.push("☆");
    }
  
    return stars.join("");
  };
export default generateStars;  
