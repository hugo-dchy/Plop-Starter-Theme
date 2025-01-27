/**
 * @file
 *
 *
 */
(function (Drupal, once) {
  /**
   * Pagination fix
   * Check if the pages displayed has the same href as the first or the last page, and if so, hide these pages to prevent display like :
   * "Previous  1  1  2  3  ...." where the "1" is display twice
   */

  const pagerItem = document.querySelectorAll(
    ".pager__item:not(.pager__item--first, .pager__item--last, .pager__item--previous, .pager__item--next) a"
  );
  const firstPage = document.querySelector(".pager__item--first a");
  const lastPage = document.querySelector(".pager__item--last a");

  for (const item of pagerItem) {
    if (firstPage != null) {
      if (item.href == firstPage.href) {
        item.closest(".pager__item").classList.add("pager__item--hidden");
      }
    }
    if (lastPage != null) {
      if (item == lastPage.href) {
        item.closest(".pager__item").classList.add("pager__item--hidden");
      }
    }
  }
})(Drupal, once);
