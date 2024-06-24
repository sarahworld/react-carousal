import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel.js";
import IMAGES_TO_TEST from "./_testCommon.js";
import '@testing-library/jest-dom';


it("it should work on right arrow click", function() {
  const { container } = render(
    <Carousel
      photos={IMAGES_TO_TEST}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});
