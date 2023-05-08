function tab() {
    const tabTitle = document.querySelectorAll('.tabs-title');
    const tabContent = document.querySelectorAll('.tabs-content-item');
    console.log(tabContent);
    tabTitle.forEach(elem => {
        elem.addEventListener('click', clickOnTab)
    });
    function clickOnTab() {
        tabTitle.forEach(item => {
            item.classList.remove("active");
        })
        this.classList.add("active");
        const tabName = this.getAttribute('data-name');
        selectTabContent(tabName);
    };
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            if (item.classList.contains(tabName)) {
                item.classList.add('is_active');
            } else {
                item.classList.remove('is_active');
            };
        });
    }
}
tab();