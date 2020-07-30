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

//Date filer Order detail list
$(document).ready(function () {
    var html = Handlebars.compile($('#Orderdetaillist').html())(data)
    var $order_preview = $('#Orderdetail')
    $order_preview.html(html)
    var OrderdetailTable = $order_preview.find(">:first-child").DataTable({
        order: [[1, 'asc']],
        pageLength: 25,
        orderable: false,
        bLengthChange: false,
        bInfo: false,
        bAutoWidth: false,
        iDisplayLength: 5,
    });
    // Date range filter
    var minDateFilter = "";
    var maxDateFilter = "";
    $("#min").datepicker({
        "onSelect": function (date) {
            minDateFilter = new Date(date).getTime();
            OrderdetailTable.draw();
        }
    }).keyup(function () {
        minDateFilter = new Date(this.value).getTime();
        tabOrderdetailTablele.draw();
    });



    $("#max").datepicker({
        "onSelect": function (date) {
            maxDateFilter = new Date(date).getTime();
            OrderdetailTable.draw();
        }
    }).keyup(function () {
        maxDateFilter = new Date(this.value).getTime();
        OrderdetailTable.draw();
    });
    $.fn.dataTable.ext.afnFiltering.pop();
    $.fn.dataTable.ext.afnFiltering.push(
        function (settings, data, dataIndex) {
            if (typeof data._date == 'undefined') {
                data._date = new Date(data[2]).getTime();
            }

            if (minDateFilter && !isNaN(minDateFilter)) {
                if (data._date < minDateFilter) {
                    return false;
                }
            }

            if (maxDateFilter && !isNaN(maxDateFilter)) {
                if (data._date > maxDateFilter) {
                    return false;
                }
            }
            return true;
        }
    ); 

   
   
});
//DetailOrderReport
$(document).ready(function () {
    var data_row;
    var UserBottomfiverow = data;
    var mysource = $('#DetailOrderReportlist').html();
    var mytemplate = Handlebars.compile(mysource);
    var myresult = mytemplate(UserBottomfiverow);
    $('#DetailOrderReport').append(myresult);

    var table = $('#DetailOrderReport').find(">:first-child").DataTable({
        
        order: [[1, 'asc']],
        orderable: false,
        bLengthChange: false,
        bFilter: false,
        bInfo: false,
        bAutoWidth: false,
        iDisplayLength: 5,
        pageLength: 25,
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
            },
            {
                targets: [7],
                orderable: false,
                searchable: false
            }
        ],
    })

    // Edit click function
    $('.edit').on('click', function () {
        data_row = $(this).closest('tr');
        $('#infodetailpage').find('input[type=text], input[type=password], input[type=number], input[type=email], textarea').val('');
        var username = $(this).closest('tr').find('td:eq(0)').text();
        var ordno = $(this).closest('tr').find('td:eq(1)').text();
        var orddate = $(this).closest('tr').find('td:eq(2)').text();
        var ordstatus = $(this).closest('tr').find('td:eq(3)').text();
        var ordtotalamt = $(this).closest('tr').find('td:eq(4)').text();
        var ordtotaqty = $(this).closest('tr').find('td:eq(5)').text();
        var ordtotacount = $(this).closest('tr').find('td:eq(6)').text();

        $("#username").val(function () {
            return this.value + username;
        });
        $("#orderno").val(function () {
            return this.value + ordno;
        });
        $("#orderdate").val(function () {
            return this.value + orddate;
        });
        $("#orderstatus").val(function () {
            return this.value + ordstatus;
        });
        $("#ordertotalamount").val(function () {
            return this.value + ordtotalamt;
        });
        $("#ordertotalqty").val(function () {
            return this.value + ordtotaqty;
        });
        $("#ordertotalcount").val(function () {
            return this.value + ordtotacount;
        });
        $("#infodetailpage").modal("show");
    });

    // reject order
    $('.rejectorder').on('click', function () {
        var orderid = $('#orderno').val();
        var jsonObj = data.usersdetails;
        for (var i = 0; i < jsonObj.length; i++) {
            if (jsonObj[i].OrderNo == orderid) {
                jsonObj[i].Status = "Rejected";
                data_row.find('td:eq(3)').text("Rejected");
            }
            $("#infodetailpage").modal("hide");
        }
    });

    // confirm order
    $('.confirmorder').on('click', function () {
        var orderid = $('#orderno').val();
        var jsonObj = data.usersdetails;
        for (var i = 0; i < jsonObj.length; i++) {
            if (jsonObj[i].OrderNo == orderid) {
                jsonObj[i].Status = "Confirm";
                data_row.find('td:eq(3)').text("Confirm");
            }
            $("#infodetailpage").modal("hide");
        }
    });

});


