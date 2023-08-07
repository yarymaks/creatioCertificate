define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "FeedTabContainer",
				"values": {
					"caption": "#ResourceString(FeedTabContainer_caption)#",
					"icon": "default-tab-icon",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "fcf58486-9411-41b2-9acb-50ce5de0b2d2",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_1zrdibn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_1zrdibn_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAddRealtyVisitsProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunWebService",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_fzbloft_caption)#",
					"color": "warn",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					}
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrTitle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_amj9l7u",
					"labelPosition": "auto",
					"control": "$StringAttribute_amj9l7u",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_6g881my",
					"labelPosition": "auto",
					"control": "$NumberAttribute_6g881my"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_2wpue94",
					"labelPosition": "auto",
					"control": "$NumberAttribute_2wpue94"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_is5f5d1",
					"labelPosition": "auto",
					"control": "$NumberAttribute_is5f5d1",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_agxt7sn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrTypeOfferUsrCommissionMultiplier",
					"control": "$UsrTypeOfferUsrCommissionMultiplier",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_d1e90jm",
					"labelPosition": "auto",
					"control": "$LookupAttribute_d1e90jm",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_dzwfjus",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_dzwfjus_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTypeOffer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_oxi5kuv",
					"labelPosition": "auto",
					"control": "$LookupAttribute_oxi5kuv",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_8clsio3",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8clsio3_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrTypeOffer",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_jdmzemj",
					"labelPosition": "auto",
					"control": "$StringAttribute_jdmzemj",
					"multiline": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_3n7661j",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_3n7661j_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_9xiltin",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_3n7661j",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_zem4bnn",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_9xiltin",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_a001rsu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_a001rsu_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_zem4bnn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_maexgtx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_maexgtx_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_imq4o3sDS"
						}
					}
				},
				"parentName": "FlexContainer_zem4bnn",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_0q5kwyc",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_0q5kwyc_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_zem4bnn",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_khez43j",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_khez43j_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_imq4o3s"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_0q5kwyc",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ebrb8ma",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ebrb8ma_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_0q5kwyc",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ldls2di",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ldls2di_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_imq4o3s"
					]
				},
				"parentName": "FlexContainer_zem4bnn",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_vqeafd1",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_3n7661j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_imq4o3s",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 12
					},
					"selectedRows": "$GridDetail_imq4o3s_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "GridDetail_imq4o3s_SelectedRows"
					},
					"visible": true,
					"fitContent": true,
					"items": "$GridDetail_imq4o3s",
					"primaryColumnName": "GridDetail_imq4o3sDS_Id",
					"columns": [
						{
							"id": "26646ba0-91ed-b149-80de-b76035d7772f",
							"code": "GridDetail_imq4o3sDS_UsrDateTime",
							"path": "UsrDateTime",
							"caption": "#ResourceString(GridDetail_imq4o3sDS_UsrDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "933185e7-6a6a-74be-d7b8-c8cc438957ef",
							"code": "GridDetail_imq4o3sDS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_imq4o3sDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "4e8b6e18-1e5a-a870-d568-f9e34525032e",
							"code": "GridDetail_imq4o3sDS_UsrOwner",
							"path": "UsrOwner",
							"caption": "#ResourceString(GridDetail_imq4o3sDS_UsrOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "6896dd9e-fc40-4b03-54a6-b6e16d842bfe",
							"code": "GridDetail_imq4o3sDS_UsrComment",
							"path": "UsrComment",
							"caption": "#ResourceString(GridDetail_imq4o3sDS_UsrComment)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_vqeafd1",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"NumberAttribute_6g881my": {
					"modelConfig": {
						"path": "PDS.UsrPriceUSD"
					},
					"validators": {
						"Validator": {
							"type": "usr.DGValidator",
							"params": {
								"minValue": 0.01,
								"message": "Price must be greater than zero"
							}
						}
					}
				},
				"NumberAttribute_2wpue94": {
					"modelConfig": {
						"path": "PDS.UsrArea"
					},
					"validators": {
						"Validator": {
							"type": "usr.DGValidator",
							"params": {
								"minValue": 0.01,
								"message": "Area must be greater than zero"
							}
						}
					}
				},
				"LookupAttribute_d1e90jm": {
					"modelConfig": {
						"path": "PDS.UsrType"
					}
				},
				"LookupAttribute_oxi5kuv": {
					"modelConfig": {
						"path": "PDS.UsrTypeOffer"
					}
				},
				"StringAttribute_jdmzemj": {
					"modelConfig": {
						"path": "PDS.UsrComment"
					},
					"validators": {
						"required": {
							"type": "crt.Required"
						}
					}
				},
				"StringAttribute_amj9l7u": {
					"modelConfig": {
						"path": "PDS.UsrTitle"
					}
				},
				"GridDetail_imq4o3s": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_imq4o3sDS"
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_imq4o3sDS_UsrDateTime": {
								"modelConfig": {
									"path": "GridDetail_imq4o3sDS.UsrDateTime"
								}
							},
							"GridDetail_imq4o3sDS_UsrPotentialCustomer": {
								"modelConfig": {
									"path": "GridDetail_imq4o3sDS.UsrPotentialCustomer"
								}
							},
							"GridDetail_imq4o3sDS_UsrOwner": {
								"modelConfig": {
									"path": "GridDetail_imq4o3sDS.UsrOwner"
								}
							},
							"GridDetail_imq4o3sDS_UsrComment": {
								"modelConfig": {
									"path": "GridDetail_imq4o3sDS.UsrComment"
								}
							},
							"GridDetail_imq4o3sDS_Id": {
								"modelConfig": {
									"path": "GridDetail_imq4o3sDS.Id"
								}
							}
						}
					}
				},
				"NumberAttribute_is5f5d1": {
					"modelConfig": {
						"path": "PDS.UsrCommissionUSD"
					}
				},
				"UsrTypeOfferUsrCommissionMultiplier": {
					"modelConfig": {
						"path": "PDS.UsrTypeOfferUsrCommissionMultiplier"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrRealty",
						"attributes": {
							"UsrTypeOfferUsrCommissionMultiplier": {
								"path": "UsrTypeOffer.UsrCommissionMultiplier",
								"type": "ForwardReference"
							}
						}
					},
					"scope": "page"
				},
				"GridDetail_imq4o3sDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrRealtyVisit",
						"attributes": {
							"UsrDateTime": {
								"path": "UsrDateTime"
							},
							"UsrPotentialCustomer": {
								"path": "UsrPotentialCustomer"
							},
							"UsrOwner": {
								"path": "UsrOwner"
							},
							"UsrComment": {
								"path": "UsrComment"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"GridDetail_imq4o3sDS": [
					{
						"attributePath": "UsrParentRealty",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
					if (request.attributeName === 'NumberAttribute_6g881my' || 				
					   request.attributeName === 'UsrTypeOfferUsrCommissionMultiplier' ) { 		
						var price = await request.$context.NumberAttribute_6g881my;
						var multiplier = await request.$context.UsrTypeOfferUsrCommissionMultiplier;
						var commission = price * multiplier;
						
						if(price>100000){
							request.$context.enableAttributeValidator('StringAttribute_jdmzemj', 'required');
						}	
						else{
							request.$context.disableAttributeValidator('StringAttribute_jdmzemj', 'required');
						}
						
						
						
						request.$context.NumberAttribute_is5f5d1 = commission;
					}
					return next?.handle(request);
				}
			},
			{
				request: "usr.RunWebServiceButtonRequest",
				handler: async (request, next) => {
					this.console.log("Run web service button works...");
					var typeObject = await request.$context.LookupAttribute_d1e90jm;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}

					var typeOfferObject = await request.$context.LookupAttribute_oxi5kuv;
					var typeOfferId = "";
					if (typeOfferObject) {
						typeOfferId = typeOfferObject.value;
					}
					
					const httpClientService = new sdk.HttpClientService();
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyWebService";
					const methodName = "GetTotalAmountByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					var params = {
						realtyTypeId: typeId,
						realtyTypeOfferId: typeOfferId,
						entityName: "UsrRealty"
					};
					const response = await httpClientService.post(endpoint, params);
					this.console.log("response total price = " + response.body.GetTotalAmountByTypeIdResult);
					return next?.handle(request);
				}
			}
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						return !(value >= minValue) ?
							 {
								"usr.DGValidator": { 
									message: config.message
								}
							}: null;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});