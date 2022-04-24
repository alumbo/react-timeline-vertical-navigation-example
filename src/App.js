import React from "react";
import {
  ItemsGrid,
  TimelineVerticalNavigation,
} from "react-timeline-vertical-navigation";

function App() {
  const getRandomDate = () => {
    const start = new Date(2000, 0, 1);
    const end = new Date();
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };
  const dates = [];
  for (let i = 0; i < 50; i++) {
    dates.push(getRandomDate());
  }
  const timelineVerticalNavigation = React.createRef();
  const itemsGrid = React.createRef();
  return (
    <>
      <TimelineVerticalNavigation
        ref={timelineVerticalNavigation}
        dates={dates}
        onDateSelected={(event) => {
          itemsGrid.current.scrollToDate(event.detail);
        }}
      />
      <ItemsGrid
        ref={itemsGrid}
        dates={dates}
        onScrolledToDate={(event) => {
          const firstDateVisible = event.detail;
          timelineVerticalNavigation.current.updateSelectedDate(
            firstDateVisible
          );
        }}
      />
    </>
  );
}

export default App;
