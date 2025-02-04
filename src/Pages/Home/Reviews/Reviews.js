import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { Link } from "react-router-dom";

const Reviews = (props) => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("http://localhost:5000/reviews").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  const wsReviews = [...reviews].reverse();

  return (
    <div className="container">
      <h2 className="text-center py-4">
        Re<span className="text-danger">views</span>
      </h2>

      <div className="row">
        {wsReviews?.slice(0, 4).map((review) => (
          <div key={review._id} className="col-md-3 text-center">
            <div className="shadow p-3 mb-5 bg-white rounded">
              <p>
                {review?.userReview.length <= 130
                  ? review?.userReview
                  : review?.userReview.slice(0, 130) + "..."}
              </p>
              <img src={review.userImage} className="w-50" alt="" />
              <h4>{review.userName}</h4>
              <p>rating: {review.rating}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container my-3 text-end">
        <Link className="text-decoration-none" to="/allReviews">
          See All Reviews
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
