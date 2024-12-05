const videoData = [
    { title: "1. Basics of Python", link: "https://youtu.be/LIjdxHXSjZQ", date: "2024-12-04" },
    { title: "2. Data Preparation", link: "https://youtu.be/eOeAprIaoD8", date: "2024-12-04" },
    { title: "3. Exploratory Data Analysis", link: "https://youtu.be/IVrB4qqjVZU", date: "2024-12-04" },
    { title: "4. Data Preparation phase to Model the Data", link: "https://youtu.be/rOxf_PbwNvA", date: "2024-12-04" },
    { title: "5. Model Evaluation", link: "https://youtu.be/h7LfEUSvKMc", date: "2024-12-04" },
    { title: "6. Naive Bayes Classification", link: "https://youtu.be/cCWDEFoZefE", date: "2024-12-04" },
    { title: "7. Neural Networks", link: "https://youtu.be/Z9NZqSkkwOM", date: "2024-12-04" },
    { title: "8. Clustering", link: "https://youtu.be/m11Dy35CLWA", date: "2024-12-04" },
    { title: "9. Regression Modelling", link: "https://youtu.be/bqSjLn13gS0", date: "2024-12-04" },
    { title: "10. Dimension Reduction", link: "https://youtu.be/ATPbZXWjnRo", date: "2024-12-04" },
    { title: "11. Logistic and Poisson Regression", link: "https://youtu.be/vK57CjmVYts", date: "2024-12-04" },
    { title: "12. Association Rule", link: "https://youtu.be/rmF3uGTm0jk", date: "2024-12-04" }
];

const solutionData = [
    { title: "Internal I Solution", link: "https://youtu.be/9Zth3lvebXA" },
    { title: "Internal II Solution", link: "https://youtu.be/952MsUt5JY4" },
    { title: "End Semester solution", link: "https://youtu.be/Me_RmhGVEzY"}
];

document.addEventListener("DOMContentLoaded", () => {
    // Populate YouTube Lectures
    const videoList = document.getElementById("video-list");
    videoData.forEach(video => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${video.title}</strong> 
            (Date: ${video.date}) - 
            <a href="${video.link}" target="_blank">Watch</a>
        `;
        videoList.appendChild(listItem);
    });

    // Populate Internal Solutions
    const solutionList = document.getElementById("solution-list");
    solutionData.forEach(solution => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <a href="${solution.link}">${solution.title}</a>
        `;
        solutionList.appendChild(listItem);
    });
});
