import classNames from "classnames";

function Skeleton({ times }) {
    // // One way to write to this
    // const boxes = [];

    // for (let i = 0; i < times; i++) {
    //     boxes.push(<div key={i} />)
    // };
    // return boxes;

    // ----------------------------------

    // This does the same thing without having to write the for loop, I think at this point the for loop works better in my brain reading it but its always good to learn a new way to write things!
    const boxes = Array(times)
        .fill(0)
        .map((_, i) => {
            return <div key={i} />
        });

    return boxes;
};

export default Skeleton;