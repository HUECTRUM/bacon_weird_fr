import $ from 'jquery';

var postDataParams = () => {
    return {
        type: 'POST',
        url: 'http://localhost:8080/new',
        contentType: 'application/json',
    };
}

export default () => $.ajax(postDataParams());
