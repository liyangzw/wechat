Page({
	data: {
		hasReult: false,
		searchWord: "",
		resultList: []
	},

	handleSearchChange: function(e) {
		this.setData({
			searchWord: e.detail.value
		})
	},

	handleSearchTap: function() {
		wx.request({
            url: 'https://nuanwan.wekeji.cn/student/index.php/trade/get_search_list', 
            data: {
            	keyword: this.data.searchWord,
            	distinct: "liyang930505"
            },
            method: "POST",
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: this.handleGetListSucc.bind(this)
        })
	},

	handleGetListSucc: function(response) {
		var hasResult = response.data.ret
		if (hasResult) {
			this.setData({
				resultList: response.data.data,
				hasResult: true
			})
		}else {
			this.setData({
				resultList: [],
				hasResult: false
			})
		}
	},

	handleItemTap: function(e) {
		wx.navigateTo({
			url: '/pages/detail/detail?id=' + e.currentTarget.id
		})
	}
})