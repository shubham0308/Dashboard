var data = {
    usersdetails: [
        {
            "UserName": "Shubham123",
            "OrderNo": "1",
            "OrderDate": "07/28/2020",
            "Status": "In-Process",
            "TotalAmount": "1000",
            "TotalQty": "10",
            "city": "New delhi"
        },
        {
            "UserName": "Shubham123",
            "OrderNo": "2",
            "OrderDate": "07/25/2020",
            "Status": "Deliverd",
            "TotalAmount": "900",
            "TotalQty": "12",
            "city": "New delhi"
        },
        {
            "UserName": "Amit20",
            "OrderNo": "3",
            "OrderDate": "07/25/2020",
            "Status": "In-process",
            "TotalAmount": "1900",
            "TotalQty": "20",
            "city": "Noida"
        },
        {
            "UserName": "Amit20",
            "OrderNo": "4",
            "OrderDate": "07/26/2020",
            "Status": "In-process",
            "TotalAmount": "1200",
            "TotalQty": "10",
            "city": "Noida"
        },
        {
            "UserName": "Sushil1990",
            "OrderNo": "5",
            "OrderDate": "07/26/2020",
            "Status": "In-process",
            "TotalAmount": "1300",
            "TotalQty": "13",
            "city": "Gurgaon"
        },
        {
            "UserName": "Sushil1990",
            "OrderNo": "6",
            "OrderDate": "07/25/2020",
            "Status": "Deliverd",
            "TotalAmount": "1500",
            "TotalQty": "10",
            "city": "Gurgaon"
        },
        {
            "UserName": "Sushil1990",
            "OrderNo": "7",
            "OrderDate": "07/25/2020",
            "Status": "Deliverd",
            "TotalAmount": "1500",
            "TotalQty": "10",
            "city": "Gurgaon"
        },
        {
            "UserName": "Tushar1993",
            "OrderNo": "8",
            "OrderDate": "07/25/2020",
            "Status": "Deliverd",
            "TotalAmount": "1500",
            "TotalQty": "10",
            "city": "Gurgaon"
        },
        {
            "UserName": "Tushar1993",
            "OrderNo": "9",
            "OrderDate": "07/25/2020",
            "Status": "Deliverd",
            "TotalAmount": "2500",
            "TotalQty": "18",
            "city": "Gurgaon"
        },
        {
            "UserName": "Tushar1993",
            "OrderNo": "10",
            "OrderDate": "07/26/2020",
            "Status": "In-process",
            "TotalAmount": "1800",
            "TotalQty": "9",
            "city": "Gurgaon"
        },
        {
            "UserName": "Tushar1993",
            "OrderNo": "11",
            "OrderDate": "07/24/2020",
            "Status": "Deliverd",
            "TotalAmount": "1800",
            "TotalQty": "9",
            "city": "Gurgaon"
        },
        {
            "UserName": "Sumit456",
            "OrderNo": "12",
            "OrderDate": "07/25/2020",
            "Status": "Deliverd",
            "TotalAmount": "800",
            "TotalQty": "7",
            "city": "Faridabad"
        },
        {
            "UserName": "Sumit456",
            "OrderNo": "13",
            "OrderDate": "07/25/2020",
            "Status": "Deliverd",
            "TotalAmount": "800",
            "TotalQty": "7",
            "city": "Faridabad"
        },
        {
            "UserName": "Sumit456",
            "OrderNo": "14",
            "OrderDate": "07/26/2020",
            "Status": "Deliverd",
            "TotalAmount": "1280",
            "TotalQty": "14",
            "city": "Faridabad"
        },
        {
            "UserName": "Umesh86",
            "OrderNo": "15",
            "OrderDate": "07/18/2020",
            "Status": "Deliverd",
            "TotalAmount": "980",
            "TotalQty": "6",
            "city": "Faridabad"
        },
        {
            "UserName": "Umesh86",
            "OrderNo": "16",
            "OrderDate": "07/08/2020",
            "Status": "Deliverd",
            "TotalAmount": "2980",
            "TotalQty": "23",
            "city": "Faridabad"
        },
        {
            "UserName": "Umesh86",
            "OrderNo": "17",
            "OrderDate": "07/26/2020",
            "Status": "In-process",
            "TotalAmount": "2080",
            "TotalQty": "13",
            "city": "Faridabad"
        },
        {
            "UserName": "Sunny987",
            "OrderNo": "18",
            "OrderDate": "07/01/2020",
            "Status": "Deliverd",
            "TotalAmount": "2080",
            "TotalQty": "13",
            "city": "Palwal"
        },
        {
            "UserName": "Sunny987",
            "OrderNo": "19",
            "OrderDate": "07/12/2020",
            "Status": "Deliverd",
            "TotalAmount": "1980",
            "TotalQty": "21",
            "city": "Palwal"
        },
        {
            "UserName": "Sunny987",
            "OrderNo": "20",
            "OrderDate": "07/25/2020",
            "Status": "Deliverd",
            "TotalAmount": "980",
            "TotalQty": "9",
            "city": "Palwal"
        },
        {
            "UserName": "Sunny987",
            "OrderNo": "21",
            "OrderDate": "07/26/2020",
            "Status": "In-process",
            "TotalAmount": "1600",
            "TotalQty": "16",
            "city": "Palwal"
        }
    ]
}; 

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

$(document).ready(function () {
    var processed_json = new Array();
    for (i = 0; i < data.usersdetails.length; i++) {
        processed_json.push([(new Date(data.usersdetails[i].OrderDate)).getTime(), parseInt(data.usersdetails[i].TotalAmount)]);
      
    }
    $('#chart').highcharts({
        chart: {
            type: "line"
        },
        title: {
            text: "Order Amount"
        },
        xAxis: {
            type: 'datetime',
            allowDecimals: false,
            title: {
                text: "Order Date"
            },
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%Y-%m-%d', this.value);
                }
            }
        },
        yAxis: {
            title: {
                text: "Amount"
            }
        },
        series: [{
            data: processed_json
        }]
    });

});

$(document).ready(function () {
    var filterDatalength = data.usersdetails.filter(({ OrderDate }) => (new Date(OrderDate)).getTime() == new Date().getTime()).length;
    var mysource1 = $('#Userlisttemplate1').html();
    var mytemplate1 = Handlebars.compile(mysource1);   
    var myresult1 = mytemplate1(data);
    $('#Userlist').append(myresult1);
});

$(document).ready(function () {
    var topfiverow = data.usersdetails.sort(function (a, b) { return parseInt(a.OrderNo) > parseInt(b.OrderNo) ? 1 : -1; }).slice(0, 5);
    var TopfilterData = {};
    TopfilterData.usersdetails = topfiverow;
    var mysource = $('#topfiveorderlist').html();
    var mytemplate = Handlebars.compile(mysource);
    var myresult = mytemplate(TopfilterData);
    $('#topfiveorder').append(myresult);

    $('#topfiveorder').find(">:first-child").DataTable({
        "fnDrawCallback": function (oSettings) {
            if ($('#topfiveorder tr').length > 5) {
                $('.dataTables_paginate').hide();
            }
        },
        order: [[1, 'asc']],
        orderable: false,
        bLengthChange: false,
        bFilter: false,
        bInfo: false,
        bAutoWidth: false,
        iDisplayLength: 5,

        columnDefs: [
            {
                targets: [0],
                orderable: false,
                searchable: false
            },
            {
                targets: [1],
                orderable: false,
                searchable: false
            },
            {
                targets: [2],
                orderable: false,
                searchable: false
            },
            {
                targets: [3],
                orderable: false,
                searchable: false
            }
        ],

    })
});

$(document).ready(function () {
    var bottomfiverow = data.usersdetails.sort(function (a, b) { return parseInt(a.OrderNo) < parseInt(b.OrderNo) ? 1 : -1; }).slice(0, 5);
    var BottomfilterData = {};
    BottomfilterData.usersdetails = bottomfiverow;
    var mysource = $('#bottomfiveorderlist').html();
    var mytemplate = Handlebars.compile(mysource);
    var myresult = mytemplate(BottomfilterData);
    $('#bottomfiveorder').append(myresult);

    $('#bottomfiveorder').find(">:first-child").DataTable({
        "fnDrawCallback": function (oSettings) {
            if ($('#bottomfiveorder tr').length > 5) {
                $('.dataTables_paginate').hide();
            }
        },
        order: [[1, 'asc']],
        orderable: false,
        bLengthChange: false,
        bFilter: false,
        bInfo: false,
        bAutoWidth: false,
        iDisplayLength: 5,
        pageLength: 5,
        columnDefs: [
            {
                targets: [0],
                orderable: false,
                searchable: false
            },
            {
                targets: [1],
                orderable: false,
                searchable: false
            },
            {
                targets: [2],
                orderable: false,
                searchable: false
            },
            {
                targets: [3],
                orderable: false,
                searchable: false
            }
        ],
    })
});

$(document).ready(function () {
    var UserTopfiverow = data.usersdetails.sort(function (a, b) { return parseInt(a.UserName) > parseInt(b.UserName) ? 1 : -1; }).slice(0, 5);
    var UserTopfilterData = {};
    UserTopfilterData.usersdetails = UserTopfiverow;
    var mysource = $('#topfiveuserlist').html();
    var mytemplate = Handlebars.compile(mysource);
    var myresult = mytemplate(UserTopfilterData);
    $('#topfiveuser').append(myresult);

    $('#topfiveuser').find(">:first-child").DataTable({
        "fnDrawCallback": function (oSettings) {
            if ($('#topfiveuser tr').length > 5) {
                $('.dataTables_paginate').hide();
            }
        },
        order: [[1, 'asc']],
        orderable: false,
        bLengthChange: false,
        bFilter: false,
        bInfo: false,
        bAutoWidth: false,
        iDisplayLength: 5,
        pageLength: 5,
        columnDefs: [
            {
                targets: [0],
                orderable: false,
                searchable: false
            },
            {
                targets: [1],
                orderable: false,
                searchable: false
            },
            {
                targets: [2],
                orderable: false,
                searchable: false
            },
            {
                targets: [3],
                orderable: false,
                searchable: false
            },
            {
                targets: [4],
                orderable: false,
                searchable: false
            }
        ],
    })
});

$(document).ready(function () {
    var UserBottomfiverow = data.usersdetails.sort(function (a, b) { return parseInt(a.OrderNo) < parseInt(b.OrderNo) ? 1 : -1; }).slice(0, 5);
    var UserTopfilterData = {};
    UserTopfilterData.usersdetails = UserBottomfiverow;
    var mysource = $('#Bottomfiveuserlist').html();
    var mytemplate = Handlebars.compile(mysource);
    var myresult = mytemplate(UserTopfilterData);
    $('#Bottomfiveuser').append(myresult);

    $('#Bottomfiveuser').find(">:first-child").DataTable({
        "fnDrawCallback": function (oSettings) {
            if ($('#Bottomfiveuser tr').length > 5) {
                $('.dataTables_paginate').hide();
            }
        },
        order: [[1, 'asc']],
        orderable: false,
        bLengthChange: false,
        bFilter: false,
        bInfo: false,
        bAutoWidth: false,
        iDisplayLength: 5,
        pageLength: 5,
        columnDefs: [
            {
                targets: [0],
                orderable: false,
                searchable: false
            },
            {
                targets: [1],
                orderable: false,
                searchable: false
            },
            {
                targets: [2],
                orderable: false,
                searchable: false
            },
            {
                targets: [3],
                orderable: false,
                searchable: false
            },
            {
                targets: [4],
                orderable: false,
                searchable: false
            }
        ],
    })
});

$(document).ready(function () {

    var html = Handlebars.compile($('#Orderdetaillist').html())(data)
    var $order_preview = $('#Orderdetail')
    $order_preview.html(html)
    $order_preview.find(">:first-child").DataTable({
        order: [[1, 'asc']],
        orderable: false,
        bLengthChange: false,
        bFilter: false,
        bInfo: false,
        bAutoWidth: false,
        iDisplayLength: 5,
        pageLength: 5,
        columnDefs: [
            {
                targets: [0],
                orderable: false,
                searchable: false
            },
            {
                targets: [1],
                orderable: false,
                searchable: false
            },
            {
                targets: [2],
                orderable: false,
                searchable: false
            },
            {
                targets: [3],
                orderable: false,
                searchable: false
            },
            {
                targets: [4],
                orderable: false,
                searchable: false
            },
            {
                targets: [5],
                orderable: false,
                searchable: false
            },
            {
                targets: [6],
                orderable: false,
                searchable: false
            }
        ],
    })
   
});