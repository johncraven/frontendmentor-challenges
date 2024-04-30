let plusIconPath = "assets/images/icon-plus.svg";
let minusIconPath = "assets/images/icon-minus.svg";

document.querySelectorAll("details")
    .forEach((detail) => detail
        .addEventListener("toggle", (event) => {
            if (detail.open) {
                // the element was toggled open
                detail.querySelector(".detail-icon").src = minusIconPath;
            } else {
                // the element was toggled closed
                detail.querySelector(".detail-icon").src = plusIconPath;
            }
        })
    );
