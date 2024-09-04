import { Button } from "@mui/material";
import React from "react";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { Link } from "react-router-dom";

const BikeComponent = ({ bikes }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-5 lg:gap-10">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
        <div key={p} className="p-3 border shadow-md rounded-md bg-white">
          <img
            src="https://autobike-light.templaza.net/wp-content/uploads/2023/04/baptiste-david-XfbjTaxSnuw-unsplash.jpg"
            alt=""
            className="rounded-md"
          />
          <div>
            <h3 className="font-bold text-xl h-10 mt-2">Kawasaki KLR 650</h3>
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-2 lg:grid-cols-3 items-center my-4">
              <div className="flex items-center gap-2 mx-auto">
                <TwoWheelerIcon color="primary" />
                <div>
                  <p className="font-semibold">BMW</p>
                  <p className=" text-secondary-400">Model</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <TwoWheelerIcon color="primary" />
                <div>
                  <p className="font-semibold">BMW</p>
                  <p className=" text-secondary-400">Model</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <TwoWheelerIcon color="primary" />
                <div>
                  <p className="font-semibold">BMW</p>
                  <p className=" text-secondary-400">Model</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <TwoWheelerIcon color="primary" />
                <div>
                  <p className="font-semibold">BMW</p>
                  <p className=" text-secondary-400">Model</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <TwoWheelerIcon color="primary" />
                <div>
                  <p className="font-semibold">BMW</p>
                  <p className=" text-secondary-400">Model</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <TwoWheelerIcon color="primary" />
                <div>
                  <p className="font-semibold">BMW</p>
                  <p className=" text-secondary-400">Model</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="flex items-center gap-1">
                <p className="text-lg font-semibold text-primary-500">
                  120 TK.
                </p>
                <p className="text-sm">per Hour</p>
              </span>
            </div>
            <Link to={`/bikes/bikes`}>
              <Button variant="contained" color="primary">
                View More
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BikeComponent;
