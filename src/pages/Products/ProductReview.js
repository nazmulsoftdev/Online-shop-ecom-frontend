import React from "react";
import ReviewCard from "../../components/Cards/ReviewCard";

const ProductReview = () => {
  const reviewData = [
    {
      id: 1,
      review: "Thanks for good product",
      reviewer: "Kamal Selim",
      reviewerPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXF-GBWIjTZI4_BhnF_nRwzzSoFT7ankNIw&usqp=CAU",
    },
    {
      id: 2,
      review: "it was great item",
      reviewer: "Maisha",
      reviewerPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHWZetIMKrEfgUvx7x-7Sb1aB0u5POgtzvSVGfgQJ3lZVTRTU-36zbd7B7V9yoxHpLug&usqp=CAU",
    },
    {
      id: 3,
      review: "it made me satisfied",
      reviewer: "Abdullah",
      reviewerPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn6JA3rO2lAQJ8mQxOyp6EbKJ9oBBKrCchmWxjqOUGOMXv1NTESJKhBIQ22mfPHYh8ys&usqp=CAU",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      {reviewData.map((review, index) => (
        <ReviewCard key={index} data={review} />
      ))}
    </div>
  );
};

export default ProductReview;
