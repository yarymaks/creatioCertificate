namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyWebServiceSchema

	/// <exclude/>
	public class UsrRealtyWebServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyWebServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyWebServiceSchema(UsrRealtyWebServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("bfe5a76b-ed20-445c-8ee1-633ba8c45a18");
			Name = "UsrRealtyWebService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d75b2c8c-7420-4414-b257-55373fc2352d");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,200,200,4,0,161,167,70,94,3,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("bfe5a76b-ed20-445c-8ee1-633ba8c45a18"));
		}

		#endregion

	}

	#endregion

}

