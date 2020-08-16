/**
 * @param {String} id Unique video identifier
 * @param {String} title Video title
 * @param {URL} thumbnail Still demo image of the video
 * @param {String} description Video description
 * @param {String} timestamp Video realse data & time transformed into days, months or years
 * @param {String} views Totals view count
 * @param {String} author Video creator
 * @param {Boolean} verified Video creator status
 *
 * @returns {Object} returns an object formatted for VideoItem component
 */
export const getVideoObject = (
    id,
    title,
    thumbnail,
    description,
    timestamp,
    views,
    author,
    verified = false
) => {
    return {
        id: id,
        title: title,
        url: `/video/${id}`,
        thumbnail: thumbnail,
        author: author,
        verified: verified,
        description: description,
        views: views,
        timestamp: timestamp,
    };
};
