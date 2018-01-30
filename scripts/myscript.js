//function main(){
$(document).ready(function (){
        $(window).resize(function(){
            var width = $(window).width();
            $("#currentWidth").html('Szerokość okna:'+width.toString())
           });

    $("#currentWidth").html = currentWidth;
    var warehouse = { //creating object warehouse, where books will be stored and also we will see the money-account of warehouse
        money: 0,
        
        book0 : { //creating object which represents type of books and also how many of this books we have in the warehouse
            title: '"Bractwo Róży"',
            price: 39,
            author: 'David Morell',
            category: 'Sensacja/Kryminał',
            how_many: 3,
            in_cart: 0
        },
        book1 : {
            title: '"Pakt Ribbentrop-Beck"',
            price: 49,
            author: 'Piotr Zychowicz',
            category: 'Historia',
            how_many: 5,
            in_cart: 0
        },
        book2 : {
            title: '"Zielona Mila"',
            price: 34.99,
            author: 'Stephen King',
            category: 'Klasyka',
            how_many: 1,
            in_cart: 0
        },
        book3 : {
            title: '"Mozaika Parsifala"',
            price: 34.99,
            author: 'Robert Ludlum',
            category: 'Sensacja/Kryminał',
            how_many: 5,
            in_cart: 0
        },
        book4 : {
            title: '"Duma i uprzedzenie"',
            price: 40,
            author: 'Jane Austen',
            category: 'Klasyka',
            how_many: 5,
            in_cart: 0
        },
        book5 : {
            title: '"Pasażer 23"',
            price: 29,
            author: 'Sebastian Fitzek',
            category: 'Sensacja/Kryminał',
            how_many: 5,
            in_cart: 0
        },
        book6 : {
            title: '"Kod Leonarda Da Vinci"',
            price: 31,
            author: 'Dan Brown',
            category: 'Sensacja/Kryminał',
            how_many: 5,
            in_cart: 0
        },
        book7 : {
            title: '"Powstający Prometusz"',
            price: 37,
            author: 'Robert Anton Wilson',
            category: 'Nauki Społeczne',
            how_many: 5,
            in_cart: 0
        },
        book8 : {
            title: '"Fizyka rzeczy niemożliwych"',
            price: 44,
            author: 'Michio Kaku',
            category: 'Popularnonaukowe',
            how_many: 5,
            in_cart: 0
        },
        book9 : {
            title: '"Czysty kod."',
            price: 49,
            author: 'Robert Cecil Martin',
            category: 'Informatyka',
            how_many: 5,
            in_cart: 0
        },
        book10 : {
            title: '"P.S. Kocham Cię"',
            price: 29,
            author: 'Cecelia Ahern',
            category: 'Literatura Piękna',
            how_many: 5,
            in_cart: 0
        },
        book11 : {
            title: '"Nowy wspaniały świat"',
            price: 35,
            author: 'Aldous Huxley',
            category: 'Fantastyka',
            how_many: 5,
            in_cart: 0
        }
    }
 
    var books=[warehouse.book0, warehouse.book1,warehouse.book2, warehouse.book3, warehouse.book4, warehouse.book5, warehouse.book6, warehouse.book7, warehouse.book8, warehouse.book9, warehouse.book10, warehouse.book11];

    var cart = {
        box_amount:[0,0,0,0,0,0,0,0,0,0,0,0],
        items:0,
        to_pay: 0,
        display_info: function(){
            if(this.items<1) alert("Najpierw dodaj ksiązki do koszyka :)");
            else{
                var message="Ksiązki w koszyku:\n";
                for (i=0;i<books.length;i++){
                    if (this.box_amount[i] > 0){
                        message+="Tytuł: "+books[i].title+" ilość: "+this.box_amount[i]+"\n"
                    }
                }
                message+="W sumie do zapłaty: "+this.to_pay+" zł";
                alert(message);
            }
        },
        add_item: function(which_book){
            if (which_book.how_many>0){
                for(i=0;i<books.length;i++){
                    if (which_book.title==books[i].title) this.box_amount[i]+=1;
                }
                which_book.how_many-=1;
                which_book.in_cart+=1;
                this.items+=1;
                this.to_pay+=which_book.price;
                this.to_pay=Math.round(this.to_pay*100)/100;
                alert("Produkt dodano do koszyka.");
                $("#how_many_in_cart").text("Ilość elementów: "+this.items);
                $("#cost_of_cart").text("Do zapłaty: "+this.to_pay+" zł");
                console.log(this.box_amount);
            }
            else alert("Tej ksiązki nie ma już w magazynie!");
        },
        MakeCartEmpty: function(){
            if (this.items>0){
                this.items=0;
                this.to_pay=0;
                for (i=0;i<books.length;i++){
                    if(this.box_amount[i]>0){
                        books[i].how_many+=books[i].in_cart;
                        books[i].in_cart=0;
                        this.box_amount[i]=0;
                    };
                };
                $("#how_many_in_cart").text("Ilość elementów: "+this.items);
                $("#cost_of_cart").text("Do zapłaty: "+this.to_pay+" zł");
                alert("Opróżniono koszyk");
            }
            else alert("Koszyk jest pusty!");
        }
    }
    $("#whatInCart").on("click", function(){cart.display_info()});
    $("#emptyCart").on("click", function(){cart.MakeCartEmpty()});
    $('#all_books').on('click', "#b0", function(){cart.add_item(warehouse.book0);}); //buttons 'Dodaj do koszyka' for all books
    $('#all_books').on('click','#b1', function(){cart.add_item(warehouse.book1);});
    $('#all_books').on('click','#b2', function(){cart.add_item(warehouse.book2);});
    $('#all_books').on('click','#b3', function(){cart.add_item(warehouse.book3);});
    $('#all_books').on('click','#b4', function(){cart.add_item(warehouse.book4);});
    $('#all_books').on('click','#b5', function(){cart.add_item(warehouse.book5);});
    $('#all_books').on('click','#b6', function(){cart.add_item(warehouse.book6);});
    $('#all_books').on('click','#b7', function(){cart.add_item(warehouse.book7);});
    $('#all_books').on('click','#b8', function(){cart.add_item(warehouse.book8);});
    $('#all_books').on('click','#b9', function(){cart.add_item(warehouse.book9);});
    $('#all_books').on('click','#b10', function(){cart.add_item(warehouse.book10);});
    $('#all_books').on('click','#b11', function(){cart.add_item(warehouse.book11);});
    var AllBooks = $("#all_books").html() //storing html code for all books, to be able to restore it when user wants to see all the books.
    
    $('#categories button').on('click', function(){ //filtering categories once clicked on a buttons on a Left menu
        $("#all_books").html(AllBooks);
        var category = $(this).html();
        var FilteredBook='';
        var AllFilteredBooks ='';
        for (let i=0;i<books.length;i++){
            if (books[i].category==category){
                FilteredBook = $("#book"+i.toString()).html();
                AllFilteredBooks += "<div class='book' id='book"+i.toString()+"'>"+FilteredBook+"</div>"
            }
        }
        $("#all_books").html(AllFilteredBooks);
    })
    $("#show_all").on('click', function(){
        $("#all_books").html(AllBooks);
    })


    $('#categoryFilter').on('click', function(){ //filtering categories once clicked on a button/link inside each book section
        $("#all_books").html(AllBooks);
        var category = $(this).html();
        var FilteredBook='';
        var AllFilteredBooks ='';
        for (let i=0;i<books.length;i++){
            if (books[i].category==category){
                FilteredBook = $("#book"+i.toString()).html();
                AllFilteredBooks += "<div class='book' id='book"+i.toString()+"'>"+FilteredBook+"</div>"
                //$("#all_books").prepend("<div class='book' id='book"+i.toString()+"'>"+FilteredBook+"</div>");
            }
        }
        $("#all_books").html(AllFilteredBooks);
    })
});
