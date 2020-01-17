let dev = 0;
let activity_id = '9900044';//生产环境活动id
if (
    window.location.host.search("120.197") > -1 ||
    window.location.host.search("yxb.com") > -1 ||
    window.location.host.search("localhost") > -1 ||
    window.location.host.search("8080") > -1 ||
    window.location.host.search("47.107") > -1
) {
    dev = 1;
    activity_id:'9900044'
} else {
    dev = 0;
    activity_id:'9900044'
}

const URL = {
    dev: dev,
    activity_id:activity_id
};

export default URL;
