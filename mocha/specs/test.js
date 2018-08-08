describe('killstar nvigation bar', ()=> {


    it('Button NEW shows submenu and links lead to correct websites', ()=> {

        const newin = 'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1)';
        const buttonUK = '.keep-site';
        const newsExit = 'body > div.fancybox-wrap.fancybox-mobile.fancybox-type-html.fancybox-opened > div > a';
        const submenuNew = [
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
        ];

        const submenuNewLink = [
            'https://www.killstar.com/collections/new-womens-clothing',
            'https://www.killstar.com/collections/new-womens-accessories',
            'https://www.killstar.com/collections/new-womens-footwear',
            'https://www.killstar.com/collections/new',
            'https://www.killstar.com/collections/new-mens-clothing',
            'https://www.killstar.com/collections/new-mens-accessories',
            'https://www.killstar.com/collections/new-for-ur-crypt',
            'https://www.killstar.com/collections/new-its-a-lifestyle'
        ];

        browser.windowHandleSize({width:1680,height:1024});
        browser.url('https://www.killstar.com')
        browser.isExisting(buttonUK)
        browser.pause(500)
        browser.click(buttonUK)
        browser.isExisting(newsExit)
        browser.pause(1000)
        browser.click(newsExit)

        for( i = 0; i < submenuNew.length; i++) {
            browser.pause(1000)
            browser.click(newin)
            browser.pause(1000)
            browser.click(submenuNew[i])
            browser.pause(2000)
            browser.getUrl().should.be.equal(submenuNewLink[i])
            console.log(submenuNewLink[i])
        }
    })
        
    it('Button WOMEN shows submenu and links lead to correct websites', ()=> {

        const women = 'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2)';
        const submenuWomen = [
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(6) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(7) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(8) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(9) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(6) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(7) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(8) > a:nth-child(1)'
        ]

        const submenuWomenLink = [
            'https://www.killstar.com/collections/womens-footwear',
            'https://www.killstar.com/collections/womens-marilyn-manson',
            'https://www.killstar.com/collections/womens-back-in-stock',
            'https://www.killstar.com/products/gift-card',
            'https://www.killstar.com/collections/womens-dresses',
            'https://www.killstar.com/collections/womens-jackets-coats',
            'https://www.killstar.com/collections/womens-tops',
            'https://www.killstar.com/collections/womens-knitwear',
            'https://www.killstar.com/collections/womens-lingerie',
            'https://www.killstar.com/collections/womens-swimwear',
            'https://www.killstar.com/collections/womens-bottoms',
            'https://www.killstar.com/collections/womens-nightwear',
            'https://www.killstar.com/collections/womens-plus-size',
            'https://www.killstar.com/collections/womens-jewellery',
            'https://www.killstar.com/collections/womens-bags-wallets',
            'https://www.killstar.com/collections/womens-socks-tights',
            'https://www.killstar.com/collections/womens-headwear',
            'https://www.killstar.com/collections/womens-eyewear',
            'https://www.killstar.com/collections/womens-belts-harnesses',
            'https://www.killstar.com/collections/womens-scarfs-gloves',
            'https://www.killstar.com/collections/womens-diy'
        ]
            
        browser.windowHandleSize({width:1680,height:1024});
        browser.url('https://www.killstar.com')

        for( i = 0; i < submenuWomen.length; i++) {
            browser.pause(1000)
            browser.click(women)
            browser.pause(1000)
            browser.click(submenuWomen[i])
            browser.pause(2000)
            browser.getUrl().should.be.equal(submenuWomenLink[i])
            console.log(submenuWomenLink[i])
        }
    })

    it('Button MEN shows submenu and links lead to correct websites', ()=> {

        const men = 'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3)';
        const submenuMen = [
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(6) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)',
            'div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)'
        ]

        const submenuMenLink = [
            'https://www.killstar.com/collections/mens-marilyn-manson',
            'https://www.killstar.com/collections/mens-back-in-stock',
            'https://www.killstar.com/products/gift-card',
            'https://www.killstar.com/products/lucky-dip-menswear',
            'https://www.killstar.com/collections/mens-all-clothing',
            'https://www.killstar.com/collections/all-mens-accessories',
            'https://www.killstar.com/collections/mens-jackets-coats',
            'https://www.killstar.com/collections/mens-tops',
            'https://www.killstar.com/collections/mens-knitwear',
            'https://www.killstar.com/collections/mens-underwear',
            'https://www.killstar.com/collections/mens-bottoms',
            'https://www.killstar.com/collections/mens-nightwear',
            'https://www.killstar.com/collections/mens-bags-wallets',
            'https://www.killstar.com/collections/mens-jewellery',
            'https://www.killstar.com/collections/mens-headwear',
            'https://www.killstar.com/collections/mens-scarfs-gloves',
            'https://www.killstar.com/collections/mens-diyr'
        ]
            
        browser.windowHandleSize({width:1680,height:1024});
        browser.url('https://www.killstar.com')

        for( i = 0; i < submenuMen.length; i++) {
            browser.pause(1000)
            browser.click(men)
            browser.pause(1000)
            browser.click(submenuMen[i])
            browser.pause(2000)
            browser.getUrl().should.be.equal(submenuMenLink[i])
            console.log(submenuMenLink[i])
        }
    })
})