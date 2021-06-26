const App = {
	data(){
		return{
			data_style:{
				width:'100%',
				height:'700px'
			}
		}
	},
	mounted() {
		this.load();
	},
	methods:{
		load(){
			var chartDom = document.getElementById('main');
			var myChart = echarts.init(chartDom);
			var option;
			
			// var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
			var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
			var bgColor = '#2E2733';
			
			var itemStyle = {
			    star5: {
			        color: colors[0]
			    },
			    star4: {
			        color: colors[1]
			    },
			    star3: {
			        color: colors[2]
			    },
			    star2: {
			        color: colors[3]
			    }
			};
			
			var data = [{
			    name: '系统',
			    itemStyle: {
			        color: colors[1]
			    },
			    children: [{
			        name: 'CPU',
			        children: [{
			            name: '5☆',
			            children: [{
			                name: '算力'
			            }, {
			                name: '负载情况'
			            }, {
			                name: '当前负载'
			            }]
			        }, {
			            name: '4☆',
			            children: [{
			                name: '过去一天'
			            }, {
			                name: '过去一周'
			            }, {
			                name: '过去一月'
			            }]
			        }, {
			            name: '3☆',
			            children: [{
			                name: '总数居'
			            }]
			        }]
			    }, {
			        name: '其他',
			        children: [{
			            name: '5☆',
			            children: [{
			                name: '内存'
			            }]
			        }, {
			            name: '4☆',
			            children: [{
			                name: '磁盘I/O'
			            }, {
			                name: '网络I/O带宽'
			            }]
			        }, {
			            name: '3☆',
			            children: [{
			                name: '出口数据量'
			            }]
			        }]
			    }]
			}, {
			    name: '应用',
			    itemStyle: {
			        color: colors[2]
			    },
			    children: [{
			        name: 'Nginx',
			        children: [{
			            name: '5☆',
			            children: [{
			                name: '带宽'
			            }]
			        }, {
			            name: '4☆',
			            children: [{
			                name: '信息'
			            }, {
			                name: 'message'
			            }]
			        }, {
			            name: '3☆',
			            children: [{
			                name: 'SMTP'
			            }]
			        }]
			    }, {
			        name: 'MySQL',
			        children: [{
			            name: '5☆',
			            children: [{
			                name: '表总数'
			            }]
			        }, {
			            name: '4☆',
			            children: [{
			                name: 'insert'
			            }, {
			                name: 'select'
			            }, {
			                name: 'update'
			            }]
			        }, {
			            name: '3☆',
			            children: [{
			                name: '操作痕迹'
			            }]
			        }]
			    }, {
			        name: '代码量',
			        children: [{
			            name: '5☆',
			            children: [{
			                name: '今日'
			            }]
			        }, {
			            name: '4☆',
			            children: [{
			                name: '昨日'
			            }, {
			                name: '过去一周'
			            }]
			        }, {
			            name: '3☆',
						children: [{
						    name: '过去一月'
						}]
			        }, {
			            name: '2☆',
			            children: [{
			                name: '过去一年'
			            }]
			        }]
			    }, {
			        name: 'Tomcat',
			        children: [{
			            name: '4☆',
			            children: [{
			                name: '负载均衡'
			            }, {
			                name: 'Qs量'
			            }, {
			                name: '其他数据'
			            }]
			        }]
			    }, {
			        name: 'Java',
			        children: [{
			            name: '5☆',
			            children: [{
			                name: 'item one'
			            }]
			        }, {
			            name: '4☆',
			            children: [{
			                name: 'itemtwo'
			            }, {
			                name: 'itemthree'
			            }]
			        }, {
			            name: '3☆',
			            children: [{
			                name: 'itemfour'
			            }]
			        }]
			    }, {
			        name: '并发控制',
			        children: [{
			            name: '4☆',
			            children: [{
			                name: 'itemfive'
			            }]
			        }]
			    }, {
			        name: '技术',
			        children: [{
			            name: '5☆',
			            children: [{
			                name: 'Web网络安全指南'
			            }]
			        }, {
			            name: '4☆',
			            children: [{
			                name: '差错控制'
			            }]
			        }]
			    }]
			}];
			
			for (var j = 0; j < data.length; ++j) {
			    var level1 = data[j].children;
			    for (var i = 0; i < level1.length; ++i) {
			        var block = level1[i].children;
			        var bookScore = [];
			        var bookScoreId;
			        for (var star = 0; star < block.length; ++star) {
			            var style = (function (name) {
			                switch (name) {
			                case '5☆':
			                    bookScoreId = 0;
			                    return itemStyle.star5;
			                case '4☆':
			                    bookScoreId = 1;
			                    return itemStyle.star4;
			                case '3☆':
			                    bookScoreId = 2;
			                    return itemStyle.star3;
			                case '2☆':
			                    bookScoreId = 3;
			                    return itemStyle.star2;
			                }
			            })(block[star].name);
			
			            block[star].label = {
			                color: style.color,
			                downplay: {
			                    opacity: 0.5
			                }
			            };
			
			            if (block[star].children) {
			                style = {
			                    opacity: 1,
			                    color: style.color
			                };
			                block[star].children.forEach(function (book) {
			                    book.value = 1;
			                    book.itemStyle = style;
			
			                    book.label = {
			                        color: style.color
			                    };
			
			                    var value = 1;
			                    if (bookScoreId === 0 || bookScoreId === 3) {
			                        value = 5;
			                    }
			
			                    if (bookScore[bookScoreId]) {
			                        bookScore[bookScoreId].value += value;
			                    }
			                    else {
			                        bookScore[bookScoreId] = {
			                            color: colors[bookScoreId],
			                            value: value
			                        };
			                    }
			                });
			            }
			        }
			
			        level1[i].itemStyle = {
			            color: data[j].itemStyle.color
			        };
			    }
			}
			
			option = {
			    backgroundColor: bgColor,
			    color: colors,
			    series: [{
			        type: 'sunburst',
			        data: data,
			        sort: function (a, b) {
			            if (a.depth === 1) {
			                return b.getValue() - a.getValue();
			            }
			            else {
			                return a.dataIndex - b.dataIndex;
			            }
			        },
			        label: {
			            rotate: 'radial',
			            color: bgColor
			        },
			        itemStyle: {
			            borderColor: bgColor,
			            borderWidth: 2
			        },
			        levels: [{}, {
			            r0: 0,
			            r: 40,
			            label: {
			                rotate: 0
			            }
			        }, {
			            r0: 40,
			            r: 105
			        }, {
			            r0: 115,
			            r: 140,
			            itemStyle: {
			                shadowBlur: 2,
			                shadowColor: colors[2],
			                color: 'transparent'
			            },
			            label: {
			                rotate: 'tangential',
			                fontSize: 10,
			                color: colors[0]
			            }
			        }, {
			            r0: 140,
			            r: 145,
			            itemStyle: {
			                shadowBlur: 80,
			                shadowColor: colors[0]
			            },
			            label: {
			                position: 'outside',
			                textShadowBlur: 5,
			                textShadowColor: '#333'
			            },
			            downplay: {
			                label: {
			                    opacity: 0.5
			                }
			            }
			        }]
			    }]
			};
			
			option && myChart.setOption(option);
			let temp = document.getElementById("zr_0");
		}
	}
}
Vue.createApp(App).mount("#paper")