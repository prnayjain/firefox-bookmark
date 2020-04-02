browser.bookmarks.onCreated.addListener(
    (id, bookmarkInfo) => {
        if (bookmarkInfo.parentId == "unfiled_____") {
            browser.bookmarks.move(id, { parentId: "toolbar_____" });
        }
    }
);