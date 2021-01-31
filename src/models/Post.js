/**
 * @class Post
 */
export default class Post {
  /**
   * @param {string} title
   */
  constructor(title) {
    this.title = title;
    this.date = new Date();
  }

  /**
   * @return {string}
   */
  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
    });
  }
}
